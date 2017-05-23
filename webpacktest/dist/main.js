/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "dist/" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

﻿
$('.navbar-nav li label').on('click', function (event) {
    GetFunctionPanel(this);
});

$('#CloseTab').on('click', RemoveTab);

function RemoveTab() {
    let tab = $('#innercontent .active');
    const tabid = tab.attr('Id');
    let tabBtn = $(`#functiontab_panel #${tabid}`);
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
        let id = tab.attr('Id');
        tab.addClass('active');
        $(`#functiontab_panel #${id}`).addClass('active');
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

    OpenNewTab(url, title, jsId);
};


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
            HideTab();

            //$('#innercontent').append(`<div id=${tabId} class='active'>${result}</div>`);
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
                var tab = $(`#innercontent #${tabId}`);
                HideTab();
                tab.addClass('active');
                var tabBtn = $(`#functiontab_panel #${tabId}`);
                tabBtn.addClass('active');
            });
            document.getElementById('functiontab_panel').appendChild(tabBtn);

            $('#CloseTab').show();

            // 2. 載入JS，並做起始化及功能綁定
            GetJsClass(tabId, jsId).then(function () {
                let tmp = mapJS.get(tabId);
                tmp.Initialize();
                tmp.BindEvent(tabId, tmp, OpenNewTab);

                // 3. mapStatus調整
                SetTrueForMapStatus(tabId);
            })
        },
        error: function () {
            alert("system errror");
        }
    })
}


function HideTab() {
    $('#innercontent > div').each(function () {
        $(this).removeClass('active');
    });
    $('#functiontab_panel > button').each(function () {
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
        let tmpJS;
        let getjs;

        switch (jsName) {
            case 'Home':
                __webpack_require__.e/* require.ensure */(0).then((function () {
                    tmpJS = __webpack_require__(2).default;
                    getjs = new tmpJS();
                    mapJS.set(tabId, getjs);

                    resolve();
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                break;
            case 'TestOne':
                __webpack_require__.e/* require.ensure */(1).then((function () {
                    tmpJS = __webpack_require__(3).default;
                    getjs = new tmpJS();
                    mapJS.set(tabId, getjs);

                    resolve();
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);