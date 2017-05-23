var mapJSClass = new Map();
var mapTabStatus = new Map().set('tab1', false).set('tab2', false).set('tab3', false).set('tab4', false).set('tab5', false);


$('.navbar-nav li label').on('click', function (event) {
    GetFunctionPanel(this);
});


$('#CloseTab').on('click', RemoveFunctionTab);


//關閉(刪除)功能頁籤
function RemoveFunctionTab() {
    let tab = $('#innercontent .active');
    const tabid = tab.attr('Id');
    let tabBtn = $(`#functiontab_panel #${tabid}`);
    SetFalseForMapStatus(tabid);
    tab.remove();
    tabBtn.remove();
    let isOpen = SwitchFunctionTab();
    if (!isOpen) {
        $('#CloseTab').hide();
    }
};


//切換已存在的功能頁籤
function SwitchFunctionTab() {
    let tab = $('#innercontent div').first();

    if (tab.length > 0) {
        let id = tab.attr('Id');
        tab.addClass('active');
        $(`#functiontab_panel #${id}`).addClass('active');
        return true;
    }

    return false;
};


//開啟新的功能頁籤
function GetFunctionPanel(e) {

    const url = $(e).data('url');
    const title = $(e).data('title');
    const jsId = $(e).data('jsid');

    OpenNewTab(url, title, jsId);
};


//開啟新的功能頁籤
function OpenNewTab(url, title, jsId) {
    const tabId = FindUnuseTab();

    if (tabId == '') {
        alert("開啟過多分頁!");
        return;
    }

    $.ajax({
        type: 'get',
        url: url,
        success: function (result) {
            // 1. 載入頁面，設定class為active
            HideFunctionTab();

            var tabpanel = document.createElement('div');
            tabpanel.id = tabId;
            tabpanel.className = 'active';
            tabpanel.innerHTML = result;
            document.getElementById('innercontent').appendChild(tabpanel);

            var tabBtn = document.createElement('button');
            tabBtn.textContent = title;
            tabBtn.className = 'btn btn-default active';
            tabBtn.id = tabId;
            tabBtn.addEventListener('click', function () {
                SwitchTab(tabId);
            });
            document.getElementById('functiontab_panel').appendChild(tabBtn);

            $('#CloseTab').show();

            // 2. 載入JS，並做起始化及功能綁定
            GetJsClass(tabId, jsId).then(function () {
                let tmp = mapJSClass.get(tabId);
                tmp.Initialize();
                tmp.BindEvent(tabId, tmp, OpenNewTab);

                // 3. mapTabStatus調整
                SetTrueForMapStatus(tabId);
            })
        },
        error: function () {
            alert("system errror");
        }
    })
}


//隱藏全部功能頁籤
function HideFunctionTab() {
    $('#innercontent > div').each(function () {
        $(this).removeClass('active');
    });
    $('#functiontab_panel > button').each(function () {
        $(this).removeClass('active');
    })
}


//取得未被使用的tab名稱
function FindUnuseTab() {
    if (mapTabStatus == null) {
        return;
    }

    let tabName = '';

    for (let item of mapTabStatus.entries()) {
        if (item[1] == false) {
            tabName = item[0];
            return tabName;
        }
    }

    return tabName;
}


//取得JS並更新mapJSClass
function GetJsClass(tabId, jsName) {
    const promise = new Promise(function (resolve, reject) {
        let tmpJS;
        let getjs;

        switch (jsName) {
            case 'Home':
                require.ensure([], function () {
                    tmpJS = require('./home').default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                });
                break;
            case 'TestOne':
                require.ensure([], function () {
                    tmpJS = require('./testone').default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                });
                break;
            default:
                break;
        }

    });

    return promise;
}


function SwitchTab(tabId) {
    var tab = $(`#innercontent #${tabId}`);
    HideFunctionTab();
    tab.addClass('active');
    var tabBtn = $(`#functiontab_panel #${tabId}`);
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