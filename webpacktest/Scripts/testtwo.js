import * as toolbar from './toolbar'

export default class TestTwo {
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
                toolbar.ChangeState(action, false, null);
            }
        }

        self.model.set("toolbar", actionmap);
    };
};

function SearchClick(self) {
    const userState = self.model.get('toolbar').get('Attach');
    toolbar.ChangeState('Attach', false, userState);
}

