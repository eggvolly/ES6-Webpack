webpackJsonp([0],{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(6);
﻿

class TestTwo {
    constructor() {
        this.model = new Map();
    };

    Initialize() {
        //alert("起始化one");
    };

    BindEvent(id, self) {
        $(`#${id} #toolbar #Search`).on('click', function () {
            SearchClick(self);
        });
    };

    InitialToolBar(self, actionmap) {

        for (let item of actionmap) {
            const action = item[0];
            if (item[1] == false) {
                __WEBPACK_IMPORTED_MODULE_0__toolbar__["a" /* ChangeState */](action, false, null);
            }
        }

        self.model.set("toolbar", actionmap);
    };
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TestTwo;
;

function SearchClick(self) {
    const userState = self.model.get('toolbar').get('Attach');
    __WEBPACK_IMPORTED_MODULE_0__toolbar__["a" /* ChangeState */]('Attach', false, userState);
}



/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeState; });
﻿function ChangeState(action, status, userState) {
    let btn = $('#functiontab_panel .active #toolbar #' + action);

    if (action != null && userState == false || userState == null) {
        if (status == 'True' || status == 'true' || status == true) {
            btn.attr('disabled', true);
        }
        else {
            btn.attr('disabled', false);
        }
        
    }
};





/***/ })

});