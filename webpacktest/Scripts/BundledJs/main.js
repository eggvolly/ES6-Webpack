webpackJsonp([3],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["OpenUrl"] = OpenUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scriptsentry__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabscript__ = __webpack_require__(2);
﻿


var modules = new Map();
var mapTabStatus = new Map();


$('.navbar-nav li label').on('click', function (event) {
    $(this).attr('disabled', true);
    const url = $(this).data('url');
    const functionId = $(this).data('functionid');
    OpenUrl('_newtab', this);
    $(this).attr('disabled', false);
});

$('#CloseTab').on('click', __WEBPACK_IMPORTED_MODULE_1__tabscript__["a" /* RemoveContentTab */]);


//開啟新連結
function OpenUrl(target, e) {
    switch (target) {
        case '_blank':
            OpenNewPage(e);
            break;
        case '_reload':
            ReloadPage(e);
            break;
        case '_newtab':
            CreateContentPanel(e);
            break;
        default:
            break;
    }
}


function OpenNewPage(e) {
    const url = e.data('url');
    let newPage = window.open();
    newPage.location = url;
}


function ReloadPage(e) {
    const url = e.data('url');
    window.location = url;
}


//開啟新的功能頁籤
function CreateContentPanel(e) {

    const url = $(e).data('url');
    const title = $(e).data('title');
    const functionId = $(e).data('functionid');

    __WEBPACK_IMPORTED_MODULE_1__tabscript__["b" /* CreateNewContentPanel */](url, title, functionId);
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadJavaScript; });
﻿function LoadJavaScript(tabId, jsName, mapJSClass) {
    const promise = new Promise(function (resolve, reject) {
        let tmpJS;
        let getjs;

        switch (jsName) {
            case 'Home':
                __webpack_require__.e/* require.ensure */(1).then((function () {
                    tmpJS = __webpack_require__(4).default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                break;
            case 'TestOne':
                __webpack_require__.e/* require.ensure */(2).then((function () {
                    tmpJS = __webpack_require__(5).default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                break;
            case 'TestTwo':
                __webpack_require__.e/* require.ensure */(0).then((function () {
                    tmpJS = __webpack_require__(6).default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                break;
            default:
                break;
        }

    });

    return promise;
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreateNewContentPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveContentTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scriptsentry__ = __webpack_require__(1);
﻿

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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__scriptsentry__["a" /* LoadJavaScript */])(tabId, functionId, modules).then(function () {
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



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
],[3]);