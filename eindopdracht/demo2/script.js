/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

// button om Back To Top te gaan
var topButton = document.querySelector('.btt');

topButton.addEventListener('click', function () {
    console.log('click');
    window.scrollTo(0, 0);
});

// var aanmaken voor volgende functies
var loadMovies = document.querySelector('button');
var loadGif = document.querySelector('span img');

//van blank naar loading state
loadMovies.addEventListener('click', function () {
    console.log(this);
    loadMovies.classList.add('hide');
    loadGif.style.display = 'inline';
    setTimeout(showGif, 3800);
});

function showGif() {
    loadGif.style.display = 'none';
    showMovies();
}

//JSON aanroepen en inladen
function showMovies() {
    var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);

    //here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON//
    request.responseType = 'json';
    request.send();

    // waiting for the response to return from the server, then dealing with it.//
    request.onload = function () {
        var variousMovies = request.response;
        populateHeader(variousMovies);
    };
}

//Elementen laden
function populateHeader(jsonObj) {
    console.log(jsonObj);
    for (var obj of jsonObj) { //ipv van for loop 

        var myArticle = document.createElement('article');
        var myH1 = document.createElement('h1');
        var myP = document.createElement('p');
        var myImg = document.createElement('img');
        var myH5 = document.createElement('h5');
        var myH4 = document.createElement('h4');
        var myButton = document.createElement('button');


        // read more in de div
        myButton.addEventListener('click', function () { //hier moet iets met toggle komen maar hoe? (toggle voor 'read less' en terug naar simple_plot)
            console.log('click', this);
            console.log("parent", this.parentElement.querySelector('p'));
            this.parentElement.querySelector('p').textContent = obj.plot;
            this.parentElement.querySelector('button').textContent = 'Read less';
            //this.parentElement.classList.toggle('active')
        });

        // content in de article
        myH1.textContent = obj.title;
        myP.textContent = obj.simple_plot;
        myImg.setAttribute('src', obj.cover);
        myH5.textContent = obj.genres;
        myH4.textContent = obj.release_date;
        myButton.textContent = 'Read more';

        var myDiv = document.createElement('div');

        myDiv.appendChild(myH1);
        myDiv.appendChild(myP);
        myDiv.appendChild(myH5);
        myDiv.appendChild(myH4);
        myDiv.appendChild(myButton);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myDiv);

        document.querySelector('section').appendChild(myArticle);

//        //met leftarrow en rightarrow de articles in focus
//        window.addEventListener("keyup", function (event) {
//            var articleArray = document.querySelectorAll('article');
//
//            if (event.keyCode == 37) { // hij checkt of de key overkomt met de < pijl
//                console.log('linker key');
//                articleArray[5].classList.add('focus');
//                //for (var i = 0; i < articleArray.length; i++)
//                //articleArray[5].focus(); // en zorgt dat de deze in focus komt
//            } else if (event.keyCode == 39) { // hij checkt of de key overkomt met de < pijl
//                console.log('rechter key');
//                articleArray[0].classList.add('focus')
//                //for (var i = 0; i < articleArray.length; i++)
//               // articleArray[0].focus(); // en zorgt dat de deze in focus komt
//            }
//        });
    }

    window.addEventListener("keyup", function (event) {

        if (event.keyCode == 38) { // hij checkt of de key overkomt met de ^ pijl
            console.log('arrowup key');
            window.scrollTo(0, 0); // hij scrollt helemaal naar boven
            //document.querySelector('article:nth-of-type(1)').focus(); // het eerste element uit de array komt in focus
        }

        if (event.keyCode == 40) { // hij checkt of de key overkomt met de v pijl
            console.log('arrowdown key');
            window.scrollTo(0, 8000); // hij scrollt helemaal naar onder
            //document.querySelector('article:nth-of-type(5)').focus(); // het laatste element uit de array komt in focus
        }
    }, false);

}



//window.addEventListener("keyup", function (event) {
//
//    if (event.keyCode == 39) { // hij checkt of de key overkomt met de > pijl
//        console.log('rechter key');
//        myArticle[0].focus; // het eerste element uit de array komt in focus
//    } else {
//        this.nextElementSibling.focus; // anders gaat hij naar de volgende sibling uit de array
//    }
//
//    if (event.keyCode == 37) { // hij checkt of de key overkomt met de < pijl
//        console.log('linker key');
//        myArticle[5].focus; // het laatste element uit de array komt in focus
//    } else {
//        this.previousElementSibling.focus; // anders gaat hij naar de vorige sibling uit de array
//    }
//}, false);
//
//}
