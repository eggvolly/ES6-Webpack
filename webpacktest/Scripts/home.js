class Home {
    constructor() {

    };

    Initialize() {
        alert("起始化");
    };

    BindFunction(id) {
        $(`#${id} #test`).on('click', ClickFunct);
    };
}

function ClickFunct() {
    alert("I am Index");
}

export default Home;