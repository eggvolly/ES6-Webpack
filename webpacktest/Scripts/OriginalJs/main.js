import { LoadJavaScript } from './scriptsentry';
import * as Tab from './tabscript';

var modules = new Map();
var mapTabStatus = new Map();


$('.navbar-nav li label').on('click', function (event) {
    $(this).attr('disabled', true);
    const url = $(this).data('url');
    const functionId = $(this).data('functionid');
    OpenUrl('_newtab', this);
    $(this).attr('disabled', false);
});

$('#CloseTab').on('click', Tab.RemoveContentTab);


//開啟新連結
export function OpenUrl(target, e) {
    switch (target) {
        case '_blank':
            OpenNewPage(e);
            break;
        case '_reload':
            ReloadPage(e);
            break;
        case '_newtab':
            CreateContentPanel(e);
            break;
        default:
            break;
    }
}


function OpenNewPage(e) {
    const url = e.data('url');
    let newPage = window.open();
    newPage.location = url;
}


function ReloadPage(e) {
    const url = e.data('url');
    window.location = url;
}


//開啟新的功能頁籤
function CreateContentPanel(e) {

    const url = $(e).data('url');
    const title = $(e).data('title');
    const functionId = $(e).data('functionid');

    Tab.CreateNewContentPanel(url, title, functionId);
};
