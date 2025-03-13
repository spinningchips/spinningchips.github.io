const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

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

function checkCookie() {
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

fetch("/content/json/games.json").then((res) => res.json()).then(data => {
    users = data.map(user=> {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const img = card.querySelector("[data-img]")

        // adding content into the query selected i.e header and body
        header.textContent = user.title
        //card.textContent = user.title
        card.href = user.link
        card.onClick = function() {setCookie("url", user.link, 365);};
        img.src = user.image
        userCardContainer.append(card)

        // return the result after successfull fetch
        return {title: user.title, Imgdescription: user.image,  description: user.link, element: card}
    });

})

searchInput.addEventListener('input', (e) => {
    const value = e.target.value
    users.forEach((user) => {
        const isVisible = user.title.toLowerCase().includes(value.toLowerCase())
        user.element.classList.toggle('hide', !isVisible)
    })
})