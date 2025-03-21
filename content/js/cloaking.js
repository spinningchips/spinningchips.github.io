const searchInput = document.getElementById('search');
let value = ""

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
    let fav = getCookie("fav");
    if (fav != "") {
        favicon = document.getElementById('favicon');
        favicon.href = fav;
    } else {
        return
    }
}

searchInput.addEventListener('input', (e) => {
    value = e.target.value
})

function setIcon() {
    alert("set");
    if (value != "") {
        setCookie("fav", value, 365);
    }
}

function testIcon() {
    let fav = getCookie("fav");
    alert("test");
}

document.addEventListener('DOMContentLoaded', function () {
    Cloak();
})