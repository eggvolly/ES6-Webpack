webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenFunction", function() { return OpenFunction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(4);
﻿

class Home {
    constructor() {
        this.model = new Map();
    };

    Initialize() {
    };

    BindEvent(id, self, opentab) {

        $(`#${id} #toolbar #Add`).on('click', function () {
            AddData(id, self);
        });

        $(`#${id} #toolbar #Search`).on('click', function () {
            GetList(id);
        })

        $(`#${id} #save`).on('click', function () {
            SaveData(self);
        })

        $(`#${id} #addtab`).on('click', function () {
            opentab('/TestOne/Index', '測試一號', 'TestOne');
        })
    };

};

function AddData(id, self) {
    const name = 'Ray';
    const phone = Math.floor(Math.random() * 1000);

    let data = new HomeData(name, phone);
    self.model.set('Add', data);
    __WEBPACK_IMPORTED_MODULE_0__toolbar__["a" /* ChangeState */]('Add', true);
}


function GetList(id) {

    $.ajax({
        type: 'get',
        url: '/Home/Search',
        success: function (result) {
            $(`#innercontent #${id}`).html(result);
        },
        error: function () {
            alert("System Error");
        }
    });
}


function SaveData(self) {
    for (let item of self.model.entries()) {
        if (item[0] == 'Add') {
            const name = item[1].name;
            const phone = item[1].phone;

            $.ajax({
                type: 'post',
                data: {
                    name: name,
                    phone: phone
                },
                url: '/Home/Save',
                success: function () {
                    alert("success");
                    __WEBPACK_IMPORTED_MODULE_0__toolbar__["a" /* ChangeState */]('Add', false);
                },
                error: function () {
                    alert("failed");
                }
            })
        }
    }
}



class HomeData {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    };
}

/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeState; });
﻿function ChangeState(action, status) {
    let btn = $('#innercontent .active #toolbar #' + action);

    if (action != null && $('#toolbar #Add').data('userstate') != 'True') {
        if (status == 'True' || status == 'true' || status == true) {
            btn.attr('disabled', true);
        }
        else {
            btn.attr('disabled', false);
        }
        
    }
};





/***/ })
]);