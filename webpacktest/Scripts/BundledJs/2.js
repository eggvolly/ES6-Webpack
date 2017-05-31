webpackJsonp([2],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(0);
﻿

class TestOne {
    constructor() {

    };

    Initialize() {
        alert("起始化one");
    };

    BindEvent(id, self) {
        $(`#${id} #test`).on('click', ClickFunct);

        $(`#${id} #open`).on('click', function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["OpenUrl"])('NewPage', $(this));
        })
    };
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TestOne;
;

function ClickFunct() {
    alert("I am TestOne");
}


/***/ })

});