import * as toolbar from './toolbar'
import { Open } from './main'

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
            Open('NewTab', $(this));
            $(this).attr('disabled', false);
        })
    };

    InitialToolBar(self, actionmap) {
        
        for (let item of actionmap) {
            const action = item[0];
            if (item[1] == false) {
                toolbar.ChangeState(action, false, null);
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
    toolbar.ChangeState('Add', true, userState);
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
                    toolbar.ChangeState('Add', false, userState);
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


export default Home;