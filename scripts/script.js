$(document).ready(function () {
    if (localStorage.token == null) {
        document.location = 'index.html';
    }
});