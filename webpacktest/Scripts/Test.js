//class TTT {
//    //constructor() {

//    //}

//    GetTest();
//    //Bind();
//}


var t = '123';

function GetTest() {
    return 'Test';
}

//console.log("Test excute");
export default class TTT {
    constructor() {

    }

    bar() { console.log("foobar") };
    GetT() { return t };
    Changet(content) {
        t = content;
    };
}