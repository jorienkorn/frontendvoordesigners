
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var buttonleft = document.querySelector('.leftbutton');
var buttonright = document.querySelector('.rightbutton');
var buttons = document.querySelectorAll('.button');
var div = document.querySelector('div');
var currentImage = 1;

function animateLeft() {
    currentImage--;
    console.log('left', currentImage);
    div.classList.add('moveleft');
    if (currentImage = 2) {
        div.classList.add('moveleft2');
    }
    if (currentImage = 3) {
        div.classList.add('moveleft3');
    }
    if (currentImage = 4) {
        div.classList.add('moveleft4');
    }
    if (currentImage = 5) {
        div.classList.add('moveleft5');
    }
}

function animateRight() {
    currentImage++;
    console.log('right');
    div.classList.add('moveright');
    if (currentImage = 2) {
        div.classList.add('moveright2');
    }
    if (currentImage = 3) {
        div.classList.add('moveright3');
    }
    if (currentImage = 4) {
        div.classList.add('moveright4');
    }
    if (currentImage = 5) {
        div.classList.add('moveright5');
    }
}

buttonleft.addEventListener('click', animateLeft);
buttonright.addEventListener('click', animateRight);




//var i;


//function check() {
//    var className = this.classList[1];
//    
//    if(className === "leftbutton"){
//        console.log('left');
//        div.classList.add='.moveleft';
//    }
//    else if(className === "rightbutton"){
//        console.log('right');
//        div.classList.add='.moveright';
//    }
//}

//for(i = 0; i < buttons.length; i++){
//    buttons[i].addEventListener('click', check);
//}
