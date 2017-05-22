
export default class TestOne {
    constructor() {

    };

    Initialize() {
        alert("起始化one");
    };

    BindFunction(id, self) {
        $(`#${id} #test`).on('click', ClickFunct);
    };
};

function ClickFunct() {
    alert("I am TestOne");
}
