function ChangeState(action, status, userState) {
    let btn = $('#functiontab_panel .active #toolbar #' + action);

    if (action != null && userState == false || userState == null) {
        if (status == 'True' || status == 'true' || status == true) {
            btn.attr('disabled', true);
        }
        else {
            btn.attr('disabled', false);
        }
        
    }
};



export { ChangeState };