$("#log_out_btn").click(function () {
    localStorage.clear();
    document.location = 'index.html';
});

$("#change_password_btn").click(function () {
    document.location = 'changePassword.html';
});

$("#mapping_new_btn").click(function () {
    document.location = 'mappingNew.html';
});

$("#mapping_edit_btn").click(function () {
    document.location = 'mappingEdit.html';
});

$("#mapping_adjustment_btn").click(function () {
    document.location = 'mappingAdjustment.html';
});

$("#shipping_btn").click(function () {
    document.location = 'shipping.html';
});