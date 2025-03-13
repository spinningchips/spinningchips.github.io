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


function loadGame() {
    let url = getCookie("url");
    if (url != "") {
        alert("Going to " + url);
        document.getElementById('game').width = 1000;
        document.getElementById('game').height = 600;
        document.getElementById('game').src = url;
    } else {
        url = prompt("Please enter your url:", "");
        if (url != "" && url != null) {
            setCookie("url", url, 365);
        }
    }
}