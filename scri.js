function hellotext() {

    var x = Math.floor(Math.random() * 3);

    if (x == 0) {
        document.getElementById('hung').innerHTML = "Zamów śniadanie, lunch i kolację.";
    } else if (x == 1) {
        document.getElementById('hung').innerHTML = "Zamów.";
    } else {
        document.getElementById('hung').innerHTML = "Zamdfdów.";
    }


}


function colbac() {

    var x = Math.floor(Math.random() * 3);

    if (x == 0) {
        document.getElementById('back').style.background = "#FFF2D9";
    } else if (x == 1) {
        document.getElementById('back').style.background = "#FFD7D2";
    } else {
        document.getElementById('back').style.background = "#FFC043";
    }


}