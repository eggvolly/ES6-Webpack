import * as toolbar from './toolbar'

class Home {
    constructor() {
        this.model = new Map();
        this.searchUrl = '/Home/Search';
        this.saveUrl = '/Home/Save';
        this.deleteUrl = '/Home/Delete';
    };

    Initialize() {
    };

    BindEvent(id, self, opentab) {

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
            opentab('/TestOne/Index', '測試一號', 'TestOne');
            $(this).attr('disabled', false);
        })
    };

};

function AddData(id, self) {
    const name = 'Ray';
    const phone = Math.floor(Math.random() * 1000);

    let data = new HomeData(name, phone);
    self.model.set('Add', data);
    toolbar.ChangeState('Add', true);
}


function GetList(id, self) {

    $.ajax({
        type: 'get',
        url: self.searchUrl,
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
                url: self.saveUrl,
                success: function () {
                    alert("success");
                    toolbar.ChangeState('Add', false);
                },
                error: function () {
                    alert("failed");
                }
            })
        }
    }
}


function DeleteFunction(id, self) {
    $.ajax({
        type: 'get',
        url: self.deleteUrl,
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


export default Home;