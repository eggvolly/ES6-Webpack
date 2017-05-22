webpackJsonp([1],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
﻿class Home {
    constructor() {

    };

    Initialize() {
        alert("起始化");
    };

    BindFunction(id) {
        $(`#${id} #test`).on('click', ClickFunct);
    };
}

function ClickFunct() {
    alert("I am Index");
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

});