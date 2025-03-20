const searchInput = document.querySelector("[fav-icon]")


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
    const value = e.target.value
})

function SetIcon() {
    if (value != "") {
        setCookie("fav", value, 30000)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    Cloak();
})