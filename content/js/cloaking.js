function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function Cloak() {
    let text = getCookie("tabtext");
    let fav = getCookie("tabicon");
    if (fav != "") {
        favicon = document.getElementById('favicon');
        favicon.href = fav;
        document.title = text
    }
}

function setIconAndText() {
    var x = document.getElementById("search").value;
    var y = document.getElementById("Tab-text").value;
    document.cookie = "tabicon=https://s2.googleusercontent.com/s2/favicons?domain_url=" + x + ";path=/";
    document.cookie = "tabtext=" + y + ";path=/";
    Cloak();
}

function clear() {
    document.cookie = "tabicon=" + "" + ";path=/";
    document.cookie = "tabtext=" + "" + ";path=/";
    Cloak();
}

document.addEventListener('DOMContentLoaded', function () {
    Cloak();
})