/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

// classlist, hide en show van https://www.youtube.com/watch?v=e57ReoUn6kM&list=PLoYCgNOIyGACnrXwo5HMCfOH9VT05znGv&index=6

var buttonleft = document.querySelector('.leftbutton');
var buttonright = document.querySelector('.rightbutton');
var img = 1;
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var img3 = document.querySelector('.img3');
var img4 = document.querySelector('.img4');
var img5 = document.querySelector('.img5');


// MET DE BUTTONS //

function leftbutton() {
    console.log(this, 'left');
    if (img == 1) {
        console.log("showing image five");
        img1.classList.add("hide");
        img5.classList.add("show");
        img = 4;
    } else if (img == 4) {
        console.log("showing image four");
        img5.classList.remove("show");
        img4.classList.add("show");
        img = 3;
    } else if (img == 3) {
        console.log("showing image three");
        img4.classList.remove("show");
        img3.classList.add("show");
        img = 2;
    } else if (img == 2) {
        console.log("showing image two");
        img3.classList.remove("show");
        img2.classList.add("show");
        img = 1;
    } else if (img == 1) {
        console.log("showing image one");
        img2.classList.remove("show");
        img1.classList.add("show");
        img = 0;
    }
}

function rightbutton() {
    console.log(this, 'right');
    if (img == 1) {
        console.log("showing image two");
        img1.classList.add("hide");
        img2.classList.add("show");
        img = 2;
    } else if (img == 2) {
        console.log("showing image three");
        img2.classList.remove("show");
        img3.classList.add("show");
        img = 3;
    } else if (img == 3) {
        console.log("showing image four");
        img3.classList.remove("show");
        img4.classList.add("show");
        img = 4;
    } else if (img == 4) {
        console.log("showing image five");
        img4.classList.remove("show");
        img5.classList.add("show");
        img = 5;
    }
}

// MET DE TOETSEN //

function arrowKeys(e) {
    if (e.keyCode == "37") {
        console.log(this, 'left');

        if (img == 1) { 
            console.log("showing image five");
            img1.classList.add("hide");
            img5.classList.add("show");
            img = 4;
        } else if (img == 4) {
            console.log("showing image four");
            img5.classList.remove("show");
            img4.classList.add("show");
            img = 3;
        } else if (img == 3) {
            console.log("showing image three");
            img4.classList.remove("show");
            img3.classList.add("show");
            img = 2;
        } else if (img == 2) {
            console.log("showing image two");
            img3.classList.remove("show");
            img2.classList.add("show");
            img = 1;
        } else if (img == 1) {
            console.log("showing image one");
            img2.classList.remove("show");
            img1.classList.add("show");
            img = 0;
        } 
    }

    if (e.keyCode == "39") {

        console.log(this, 'right');
        if (img == 1) {
            console.log("showing image two");
            img1.classList.add("hide");
            img2.classList.add("show");
            img = 2;
        } else if (img == 2) {
            console.log("showing image three");
            img2.classList.remove("show");
            img3.classList.add("show");
            img = 3;
        } else if (img == 3) {
            console.log("showing image four");
            img3.classList.remove("show");
            img4.classList.add("show");
            img = 4;
        } else if (img == 4) {
            console.log("showing image five");
            img4.classList.remove("show");
            img5.classList.add("show");
            img = 5;
        }
    }
}

buttonleft.addEventListener('click', leftbutton);
buttonright.addEventListener('click', rightbutton);
window.addEventListener('keydown', arrowKeys, false);
