webpackJsonp([1],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
﻿
class TestOne {
    constructor() {

    };

    Initialize() {
        alert("起始化one");
    };

    BindEvent(id, self, opentab) {
        $(`#${id} #test`).on('click', ClickFunct);
    };
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TestOne;
;

function ClickFunct() {
    alert("I am TestOne");
}


/***/ })

});