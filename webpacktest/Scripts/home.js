
class Home {
    constructor() {
        this.mapData = new Map();
        console.log(this.mapData);
    };

    Initialize() {
    };

    BindFunction(id, self) {
        $(`#${id} #add`).on('click', function () {
            const name = 'Ray';
            const phone = Math.floor(Math.random() * 1000);

            let data = new HomeData(name, phone);
            self.mapData.set('Add', data);
        });
        $(`#${id} #save`).on('click', function () {
            for (let item of self.mapData.entries()) {
                if (item[0] == 'Add') {
                    const name = item[1].name;
                    const phone = item[1].phone;

                    $.ajax({
                        type: 'post',
                        data: {
                            name: name,
                            phone:phone
                        },
                        url: '/Home/Save',
                        success: function () {
                            alert("success");
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

class HomeData {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    };
}

function AddData(name, phone) {
    let data = new HomeData(name, phone);
    mapData.set('Add', data);
};

export default Home;
export { HomeData };