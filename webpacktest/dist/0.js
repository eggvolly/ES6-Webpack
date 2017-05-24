webpackJsonp([0],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(0);
﻿


class Home {
    constructor() {
        this.model = new Map();
    };

    Initialize(self) {
        let urlMap = new Map();
        urlMap.set('search', '/Home/Search');
        urlMap.set('save', '/Home/Save');
        urlMap.set('delete', '/Home/Delete');

        self.model.set('url', urlMap);
    };

    BindEvent(id, self) {

        $(`#${id} #toolbar #Add`).on('click', function () {
            AddData(id, self);
        });

        $(`#${id} #toolbar #Search`).on('click', function () {
            GetList(id, self);
        });

        $(`#${id} #toolbar #Delete`).on('click', function () {
            DeleteFunction(id, self);
        });

        $(`#${id} #save`).on('click', function () {
            SaveData(self);
        })

        $(`#${id} #addtab`).on('click', function () {
            $(this).attr('disabled', true);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__main__["Open"])('NewTab', $(this));
            $(this).attr('disabled', false);
        })
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

};

function AddData(id, self) {
    const name = 'Ray';
    const phone = Math.floor(Math.random() * 1000);

    let data = new HomeData(name, phone);
    self.model.set('Add', data);
    const userState = self.model.get('toolbar').get('Add');
    __WEBPACK_IMPORTED_MODULE_0__toolbar__["a" /* ChangeState */]('Add', true, userState);
}


function GetList(id, self) {

    let urls = self.model.get('url');
    const url = urls.get('search');

    $.ajax({
        type: 'get',
        url: url,
        success: function (result) {
            $(`#functiontab_panel #${id}`).html(result);
        },
        error: function () {
            alert("System Error");
        }
    });
}


function SaveData(self) {
    let urls = self.model.get('url');
    const url = urls.get('save');

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
                url: url,
                success: function () {
                    alert("success");
                    const userState = self.model.get('toolbar').get('Add');
                    __WEBPACK_IMPORTED_MODULE_0__toolbar__["a" /* ChangeState */]('Add', false, userState);
                },
                error: function () {
                    alert("failed");
                }
            })
        }
    }
}


function DeleteFunction(id, self) {

    let urls = self.model.get('url');
    const url = urls.get('delete');

    $.ajax({
        type: 'get',
        url: url,
        success: function (result) {
            let panel = $(`#${id} #myModal #searchpanel`);
            panel.html(result);

            $(`#${id} #myModal`).modal({
                keyboard: false,
                backdrop: false
            }, 'show');
        },
        error: function () {
            alert("System Error");
        }
    })
}



class HomeData {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    };
}


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 5:
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