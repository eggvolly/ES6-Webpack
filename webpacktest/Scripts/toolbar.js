function ChangeState(action, status) {
    let btn = $('#innercontent .active #toolbar #' + action);

    if (action != null && $('#toolbar #Add').data('userstate') != 'True') {
        if (status == 'True' || status == 'true' || status == true) {
            btn.attr('disabled', true);
        }
        else {
            btn.attr('disabled', false);
        }
        
    }
};



export { ChangeState };