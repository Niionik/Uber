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

    menu.style.display = (menu.style.display == "block") ? "block" : "none";
}

menu.addEventListener("click", menuclick());

var find = document.getElementById("findfixed");
var boxstyle = document.getElementById("box");


function onScroll(e) {

    window.scrolltop >= boxstyle.classList.add("findfixed");
}


document.addEventListener('scroll', onScroll);

/*
function imgcreate() {
    var img = document.createElement("img");

    var svg = ["img/1.svg", "img/2.svg", "img/3.svg", "img/4.svg"]

    img.classList.add("presentation");
    img.setAttribute("src", svg);




}

function buttonclick(e) {
    console.log(e);
    var menu = document.getElementById("headmenu");
    var butmen = document.getElementById("bmenu");

    menu.addEventListener("click", function() {
        menu.style.display = (menu.style.display == "none") ? "block" : "none";
    });
    butmen.addEventListener("click", function() {
        menu.style.display = (menu.style.display == "none") ? "block" : "none";
    });


}



var but = document.querySelector(".menubuttonnav");

but.addEventListener("click", menuclick(), false);


document.getElementById("bmenu").onclick = function(e) {

    console.log(e);

    var menu = document.getElementById("headmenu");

    menu.addEventListener("click", menu);

    menu.style.display = (menu.style.display == "none") ? "block" : "none";
}

function menuclick(e) {
    console.log(e);

    var menu = document.getElementById("headmenu");

    menu.addEventListener("click", menu, false);

    menu.style.display = (menu.style.display == "none") ? "block" : "none";
}


*/