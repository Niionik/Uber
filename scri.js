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

    img.setAttribute("src", "img/1.svg");
    img.classList.add("presentation");

    if (x == 0) {
        document.getElementById('back').style.backgroundColor = "#FFF2D9";
        document.getElementById("back").prepend(img);

    } else if (x == 1) {
        document.getElementById('back').style.backgroundColor = "#FFD7D2";
    } else {
        document.getElementById('back').style.backgroundColor = "#FFC043";
    }

}

document.getElementById("bmenu").onclick = function() {

    console.log(e);

    var menu = document.getElementById("headmenu");

    menu.style.display = (menu.style.display == "none") ? "block" : "none";
}

/*
function menuclick() {

    console.log(e);

    var menu = document.getElementById("headmenu");

    menu.style.display = (menu.style.display == "none") ? "block" : "none";
}

var but = document.querySelector(".menubuttonnav");

but.addEventListener("click", menuclick(), false);



function menuclick(e) {
    console.log(e);

    var menu = document.getElementById("headmenu");

    menu.addEventListener("click", menu, false);

    menu.style.display = (menu.style.display == "none") ? "block" : "none";
}

function imgcreate() {
    var img = document.createElement("img");
    const back = document.getElementById('back');
    img.classList.add("presentation");


    if (back == style.backgroundColor = "#FFF2D9"){
        img.setAttribute("src", "img/1.svg");
    }else if (back == style.backgroundColor = "#FFD7D2"){
        img.setAttribute("src", "img/2.svg");
    }
}
*/