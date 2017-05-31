import { LoadJavaScript } from './scriptsentry';

var modules = new Map();
var mapTabStatus = new Map();


//關閉(刪除)功能頁籤
function RemoveContentTab(id) {

    if (typeof (id) != 'string') {
        id = $('#functiontab_panel .active').attr('Id');
    }

    let tab = $(`#functiontab_panel #${id}`);
    let tabBtn = $(`#functionbar_panel #${id}`);
    modules.delete(id);
    SetFalseForMapStatus(id);
    tab.remove();
    tabBtn.remove();

    if ($(`#functiontab_panel .active`).length == 0) {
        let isOpen = SwitchContentTab()
        if (!isOpen) {
            $('#CloseTab').hide();
        }
    }
}


//切換已存在的功能頁籤
function SwitchContentTab() {
    let tab = $('#functiontab_panel > div').last();
    if (tab.length > 0) {
        let id = tab.attr('Id');
        tab.addClass('active');
        $(`#functionbar_panel #${id}`).addClass('active');
        return true;
    }

    return false;
};


//開啟新的功能頁籤
function CreateNewContentPanel(url, title, functionId) {
    const tabId = FindUnuseTab();

    if (tabId == '') {
        alert("開啟過多分頁!");
        return;
    }

    $.ajax({
        type: 'get',
        url: url,
        async: false,
        success: function (result) {
            // 1. 載入頁面，設定class為active
            HideContentTab();

            var tabpanel = document.createElement('div');
            tabpanel.id = tabId;
            tabpanel.className = 'active';
            tabpanel.innerHTML = result;
            document.getElementById('functiontab_panel').appendChild(tabpanel);

            var barDiv = document.createElement('div');
            barDiv.id = tabId;
            barDiv.className = 'btn btn-default active';

            var tabBtn = document.createElement('label');
            tabBtn.textContent = title;
            tabBtn.addEventListener('click', function () {
                SwitchTab(tabId);
            });
            var closeBtn = document.createElement('button');
            closeBtn.className = 'close glyphicon glyphicon-remove'
            closeBtn.addEventListener('click', function () {
                RemoveContentTab(tabId);
            });

            barDiv.appendChild(tabBtn);
            barDiv.appendChild(closeBtn);
            document.getElementById('functionbar_panel').appendChild(barDiv);

            $('#CloseTab').show();

            // 2. 載入JS，並做起始化及功能綁定
            LoadJavaScript(tabId, functionId, modules).then(function () {
                let tmp = modules.get(tabId);
                tmp.Initialize(tmp);
                tmp.BindEvent(tabId, tmp);
                if ($(`#functiontab_panel #${tabId} #toolbar`).length > 0) {
                    const toolbarMap = GetToolBarStatus(functionId);
                    tmp.InitialToolBar(tmp, toolbarMap);
                }

                // 3. mapTabStatus調整
                SetTrueForMapStatus(tabId);
            })
        },
        error: function () {
            alert("system errror");
        }
    })
}


function GetToolBarStatus(functionid) {
    if (functionid == null) {
        return;
    }

    let strMap = new Map();
    $.ajax({
        type: 'post',
        async: false,
        url: `/${functionid}/GetToolBarStatus`,
        success: function (result) {
            let obj = JSON.parse(result)
            for (let k of Object.keys(obj)) {
                strMap.set(k.replace('Disable', ''), obj[k]);
            }

        },
        error: function () {
            alert("Error");
        }
    })
    return strMap;
}


//隱藏全部功能頁籤
function HideContentTab() {
    $('#functiontab_panel > div').each(function () {
        $(this).removeClass('active');
    });
    $('#functionbar_panel > div').each(function () {
        $(this).removeClass('active');
    })
}


//取得未被使用的tab名稱
function FindUnuseTab() {
    if (mapTabStatus == null) {
        return;
    }

    if (mapTabStatus.size == 5) {
        let tabName = '';
        for (let item of mapTabStatus.entries()) {
            if (item[1] == false) {
                tabName = item[0];
                return tabName;
            }
        }

        return tabName;
    }
    else {
        const tabName = 'tab' + Math.floor(Math.random() * 10000);
        while (mapTabStatus.has(tabName)) {
            tabName = 'tab' + Math.floor(Math.random() * 10000);
        };

        mapTabStatus.set(tabName, false);
        return tabName;
    }
}


function SwitchTab(tabId) {
    var tab = $(`#functiontab_panel #${tabId}`);
    HideContentTab();
    tab.addClass('active');
    var tabBtn = $(`#functionbar_panel #${tabId}`);
    tabBtn.addClass('active');
};


//設定mapStatus為true
function SetTrueForMapStatus(key) {
    if (mapTabStatus == null || !mapTabStatus.has(key)) {
        return;
    };
    mapTabStatus.delete(key);
    mapTabStatus.set(key, true);
}


function SetFalseForMapStatus(key) {
    if (mapTabStatus == null || !mapTabStatus.has(key)) {
        return;
    };
    mapTabStatus.delete(key);
    mapTabStatus.set(key, false);
}

export { CreateNewContentPanel, RemoveContentTab };