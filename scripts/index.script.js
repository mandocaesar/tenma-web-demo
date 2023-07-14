
var server = "http://localhost:5057/api/Auth/login";
var demo = true;
$("#loginbtn").click(function () {
    var request = {
        UserName: document.getElementById("username").value,
        Password: document.getElementById("password").value
    };
    if (demo) {
        localStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1QgZm9yIHRlbm1hLmVuZHBvaW50ZGV2LmNvbSIsImp0aSI6IjU5NDQ0MDA2LWI2NjItNGVkNC04ZTIyLTFlZDBlYmU2MDNjNCIsImlhdCI6IjE0LzA3LzIwMjMgMDI6MjA6MTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImY5ODZkYjI5LTM4NzQtNDNiMC05M2NiLTU5Y2YxOTZkZGM2MyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJUZW5tYSBVc2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTY4OTMyMjgxMSwiaXNzIjoidGVubWEuZW5kcG9pbnRkZXYuY29tIiwiYXVkIjoidGVubWEuZW5kcG9pbnRkZXYuY29tIn0.njChv-L-arJFkMBW-6JIluDN6XK1B2Y-PFKs5r7XjDU";
        var object = JSON.parse(atob(localStorage.token.split('.')[1]));
        console.log(object);
        localStorage.name = object["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
        localStorage.role = object["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        localStorage.identifier = object["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]

        alert('Welcome! ' + localStorage.name);
        document.location = 'main.html';
    } else {
        $.ajax({
            type: "POST",
            url: server,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            success: function (data) {
                localStorage.token = data.token;
                var object = JSON.parse(atob(data.token.split('.')[1]));
                console.log(object);
                localStorage.name = object["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
                localStorage.role = object["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
                localStorage.identifier = object["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]


                alert('Welcome! ' + localStorage.name);
                document.location = 'main.html';

            },
            error: function () {
                alert("Login Failed");
            }
        });
    }
});