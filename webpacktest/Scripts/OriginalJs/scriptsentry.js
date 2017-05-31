function LoadJavaScript(tabId, jsName, mapJSClass) {
    const promise = new Promise(function (resolve, reject) {
        let tmpJS;
        let getjs;

        switch (jsName) {
            case 'Home':
                require.ensure([], function () {
                    tmpJS = require('./home').default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                });
                break;
            case 'TestOne':
                require.ensure([], function () {
                    tmpJS = require('./testone').default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                });
                break;
            case 'TestTwo':
                require.ensure([], function () {
                    tmpJS = require('./testtwo').default;
                    getjs = new tmpJS();
                    mapJSClass.set(tabId, getjs);

                    resolve();
                });
                break;
            default:
                break;
        }

    });

    return promise;
}

export { LoadJavaScript };