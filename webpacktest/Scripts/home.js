import * as toolbar from './toolbar'

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
    toolbar.ChangeState('Add', true);
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
                    toolbar.ChangeState('Add', false);
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

export default Home;
export { OpenFunction };