
$('.navbar-nav li label').on('click', function (event) {
    GetFunctionPanel(this);
});

$('#CloseTab').on('click', RemoveTab);
function RemoveTab() {
    let tab = $('#innercontent .active');
    const tabid = tab.attr('Id');
    let tabBtn = $(`#tabpanel #${tabid}`);
    SetFalseForMapStatus(tabid);
    tab.remove();
    tabBtn.remove();
    let isOpen = OpenTab();
    if (!isOpen) {
        $('#CloseTab').hide();
    }
};

function OpenTab() {
    let tab = $('#innercontent div').first();

    if (tab.length > 0) {
        tab.addClass('active');
        return true;
    }

    return false;
};


/**
 * 以上為共用的部分
 */
var mapJS = new Map();
var mapStatus = new Map().set('tab1', false).set('tab2', false).set('tab3', false).set('tab4', false).set('tab5', false);

function GetFunctionPanel(e) {

    const url = $(e).data('url');
    const title = $(e).data('title');
    const jsId = $(e).data('jsid');

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
            HideTab();
            $('#innercontent').append(`<div id=${tabId} class='active'>${result}</div>`);
            var tabBtn = document.createElement('button');
            tabBtn.textContent = title;
            tabBtn.className = 'btn btn-default';
            tabBtn.id = tabId;
            tabBtn.addEventListener('click', function () {
                var tab = $(`#${tabId}`);
                HideTab();
                tab.addClass('active');
            });
            document.getElementById('tabpanel').appendChild(tabBtn);

            $('#CloseTab').show();

             // 2. 載入JS，並做起始化及功能綁定
            GetJsClass(tabId, jsId).then(function () {
                let tmp = mapJS.get(tabId);
                tmp.Initialize();
                tmp.BindFunction(tabId);

                // 3. mapStatus調整
                SetTrueForMapStatus(tabId);
            })
        },
        error: function () {
            alert("system errror");
        }
    })
};

function HideTab() {
    $('#innercontent div').each(function () {
        $(this).removeClass('active');
    })
}


//取得未被使用的tab名稱
function FindUnuseTab() {
    if (mapStatus == null) {
        return;
    }

    let tabName = '';

    for (let item of mapStatus.entries()) {
        if (item[1] == false) {
            tabName = item[0];
            return tabName;
        }
    }

    return tabName;
}

//取得JS並更新mapJS
function GetJsClass(tabId, jsName) {
    const promise = new Promise(function (resolve, reject) {
        console.log(jsName);
        let tmpJS;
        let getjs;
        switch (jsName) {
            case 'Home':
                require.ensure([], function () {
                    tmpJS = require('./home').default;
                    getjs = new tmpJS();
                    mapJS.set(tabId, getjs);

                    resolve();
                });
                break;
            case 'TestOne':
                require.ensure([], function () {
                    tmpJS = require('./testone').default;
                    getjs = new tmpJS();
                    mapJS.set(tabId, getjs);

                    resolve();
                });
                break;
            default:
                break;
        }

    });

    return promise;
};


//設定mapStatus為true
function SetTrueForMapStatus(key) {
    if (mapStatus == null || !mapStatus.has(key)) {
        return;
    };
    mapStatus.delete(key);
    mapStatus.set(key, true);
}

function SetFalseForMapStatus(key) {
    if (mapStatus == null || !mapStatus.has(key)) {
        return;
    };
    mapStatus.delete(key);
    mapStatus.set(key, false);
}