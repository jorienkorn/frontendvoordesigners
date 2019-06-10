/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


//JSON aanroepen
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
        
        myButton.addEventListener('click', function () {
            console.log('click', this);
            console.log("parent", this.parentElement.querySelector('p'));
            this.parentElement.querySelector('p').textContent = obj.plot;
            
        });

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
    }

    var button = document.querySelector('button');

}
