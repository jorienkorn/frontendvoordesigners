/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var drag;

var dontdrop = document.querySelectorAll('.notdrop');

function dragStart(ev) {
    console.log('dragstart');
    drag = ev.target;
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
//    dontdrop.dataTransfer.dropEffect = "none";
//    dontdrop.dataTransfer.effectAllowed = "none";
}

function dragOver(ev) {
    console.log('dragover', event.target);
    ev.preventDefault();
    
}

function dragEnter(ev) {
    console.log('dragenter');
    event.target.classList.add("over");
}

function dragLeave(ev) {
    console.log('dragleave');
    event.target.classList.remove("over");
}

function drop(ev) {
    console.log('drop');
    ev.preventDefault();
    ev.target.parentNode.insertBefore(drag, event.target.previousSibling);
    event.target.classList.remove("over");
}

document.addEventListener("dragstart", dragStart);
document.addEventListener("dragover", dragOver);
document.addEventListener("drop", drop);
document.addEventListener("dragenter", dragEnter);
document.addEventListener("dragleave", dragLeave);
