import * as toolbar from './toolbar'

class Home {
    constructor() {
        this.mapData = new Map();
    };

    Initialize() {
    };

    BindFunction(id, self) {
        $(`#${id} #toolbar #Add`).on('click', function () {
            console.log(id + "  add");
            const name = 'Ray';
            const phone = Math.floor(Math.random() * 1000);

            let data = new HomeData(name, phone);
            self.mapData.set('Add', data);
            toolbar.ChangeState('Add', true);
        });

        $(`#${id} #toolbar #Search`).on('click', function () {
            GetList(id);
        })

        $(`#${id} #save`).on('click', function () {
            console.log(id);
            for (let item of self.mapData.entries()) {
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
        })
    };


};


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


class HomeData {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    };
}

export default Home;