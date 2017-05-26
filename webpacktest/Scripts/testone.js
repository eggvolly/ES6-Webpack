import { OpenUrl } from './main'

export default class TestOne {
    constructor() {

    };

    Initialize() {
        alert("起始化one");
    };

    BindEvent(id, self) {
        $(`#${id} #test`).on('click', ClickFunct);

        $(`#${id} #open`).on('click', function () {
            OpenUrl('NewPage', $(this));
        })
    };
};

function ClickFunct() {
    alert("I am TestOne");
}
