import * as toolbar from './toolbar'

export default class TestTwo {
    constructor() {
        this.model = new Map();
    };

    Initialize(self) {
        //alert("起始化one");
        let urlMap = new Map();
        urlMap.set("Add", "/TestTwo/Add");
        urlMap.set("Save", "/TestTwo/Save");
        urlMap.set("Search", "/TestTwo/Search");
        self.model.set("url", urlMap);
    };

    BindEvent(id, self) {
        $(`#${id} #toolbar #Search`).on('click', function () {
            SearchClick(id, self);
        });

        $(`#${id} #toolbar #Add`).on('click', function () {
            AddData(id, self);
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

function SearchClick(id, self) {
    const url = self.model.get('url').get('Search');

    $.ajax({
        type: 'post',
        url: url,
        success: function (result) {
            let panel = $(`#${id} #resultpanel`);
            panel.html(result);

            $(`#${id} #resultpanel #save`).on('click', function () {
                const data = self.model.get('add');
                const url = self.model.get('url').get('Save');

                $.ajax({
                    type: 'post',
                    data: {
                        name: data
                    },
                    url: url,
                    success: function () {
                        alert("save success");
                    },
                    error: function () {
                        alert("save error");
                    }
                })
            })
        }
    })
};

function AddData(id, self) {
    const url = self.model.get('url').get('Add');
 
    $.ajax({
        type: 'get',
        url: url,
        success: function (result) {
            let panel = $(`#${id} #TestTwoContent`);
            panel.html(result);
            $(`#${id} #TestTwoContent #sendAdd`).on('click', function () {
                let newData = $(`#${id} #TestTwoContent #accountName`).val();
                let newDataTr = document.createElement('tr');
                let newDataTd = document.createElement('td');
                newDataTd.textContent = newData;
                newDataTr.appendChild(newDataTd);

                self.model.set("add", newData);

                $(`#${id} #resultpanel table`).append(newDataTr);                
            })
        }
    })
}

