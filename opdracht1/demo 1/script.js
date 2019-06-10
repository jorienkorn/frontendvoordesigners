/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//De volgende code is met veel behulp van https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API tot stand gekomen

var dragging;                                                  

function dragStart(event) {
    dragging = event.target;                                    
    event.dataTransfer.effectAllowed = 'move';                  
    event.dataTransfer.setData('text/plain', event.target.id);  
}

function dragOver(event) {
    console.log('dragOver', event.target);
    event.preventDefault();
}

function drop(event) {
     console.log('drop', event.target);

    event.preventDefault();
    event.target.classList.remove('over');                      
    event.target.parentNode.insertBefore(dragging, event.target.previousSibling);
}

document.addEventListener('dragstart', dragStart);
document.addEventListener('dragover', dragOver);
document.addEventListener('drop', drop);
