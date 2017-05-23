
export default class TestOne {
    constructor() {

    };

    Initialize() {
        alert("起始化one");
    };

    BindEvent(id, self, opentab) {
        $(`#${id} #test`).on('click', ClickFunct);
    };
};

function ClickFunct() {
    alert("I am TestOne");
}
