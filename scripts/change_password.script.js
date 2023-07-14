$(document).ready(function () {
    $('#username').val(localStorage.name)
});

$("#cancel_btn").click(function () {
    document.location = "main.html"
});

$("#update_btn").click(function () {

    if (document.getElementById("new_password").value !== document.getElementById("retype_password").value) {
        alert("Password baru tidak sesuai, mohon masukan kembali")

    } else {

        var request = {
            UserName: document.getElementById("username").value,
            OldPassword: document.getElementById("old_password").value,
            NewPassword: document.getElementById("new_password").value
        };
        $.ajax({
            type: "POST",
            url: "http://localhost:5057/api/Auth/changePassword",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            success: function (data) {

                alert('Pergantian password success ' + localStorage.name + 'reason ' + data);
                // document.location = 'main.html';

            },
            error: function () {
                alert('Pergantian password gagal ' + localStorage.name);

            }
        });
    }
});