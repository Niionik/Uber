function hellotext() {

    var x = Math.floor(Math.random() * 4);

    if (x == 0) {
        document.getElementById('hung').innerHTML = "Zamów śniadanie, lunch i kolację.";

    } else
    if (x == 1) {
        document.getElementById('hung').innerHTML = "Głód doskwiera? Zamów jedzenie.";
    } else if (x == 2) {
        document.getElementById('hung').innerHTML = "Czas coś zjeść? Jesteś we właściwym miejscu.";
    } else {
        document.getElementById('hung').innerHTML = "Zamów jedzenie z dostawą pod Twoje drzwi.";
    }
}


function colbac() {

    var x = Math.floor(Math.random() * 3);
    var img = document.createElement("img");
    var backpagecolor = document.getElementById('wrapper');
    var svg = ["img/1.svg", "img/2.svg", "img/3.svg", "img/4.svg"];
    img.classList.add("presentation");

    if (x == 0) {
        img.setAttribute("src", svg[0]);
        backpagecolor.style.backgroundColor = "#FFF2D9";
    } else if (x == 1) {
        img.setAttribute("src", svg[1]);
        backpagecolor.style.backgroundColor = "#FFD7D2";
    } else if (x == 2) {
        img.setAttribute("src", svg[3]);
        backpagecolor.style.backgroundColor = "#FFC043";
    } else {
        img.setAttribute("src", svg[2]);
        backpagecolor.style.backgroundColor = "#FFF2D9";
    }
    document.getElementById("back").prepend(img);
}


var menu = document.getElementById("headmenu");

document.getElementById("bmenu").onclick = function() {

    var menu = document.getElementById("headmenu");

    menu.style.display = (menu.style.display == "none") ? "block" : "none";

}

function menuclick(e) {

    console.log(e);

    var menu = document.getElementById("headmenu");

    menu.style.display = (menu.style.display == "none") ? "block" : "none";
}

menu.addEventListener("click", menuclick);


var boxstyle = document.getElementById("box");
var body = document.getElementById("wrapper");


function onScroll(e) {

    console.log(body.scrollTop);

    if (window.scrollY > 130) {
        boxstyle.classList.add("findfixed");
    } else if (window.scrollY == 0) {

        boxstyle.classList.remove("findfixed");
    }
}

document.addEventListener('scroll', onScroll);