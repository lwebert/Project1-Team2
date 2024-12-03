//index.html Submit button redirect to input.html
const IndexSubmitEl = document.querySelector("#index-submit"); //Submit button on index.html
const error = document.getElementById('error1');
let existingMovie = JSON.parse(localStorage.getItem('movies'));

function submitnewmovie() {
    let newMovieTitle = document.querySelector("#new-movie").value;

    if (!newMovieTitle) {
        //add pop-up saying to enter movie title!
        error.textContent = 'Please enter movie title.';
        setTimeout(() => {

        }, 3000);
    }

    else if (newMovieTitle) {
        if (existingMovie && (existingMovie.some(item => item.movieTitle === newMovieTitle))) {
            //add pop-up for duplicate movie titles

            error.textContent = 'Movie already exists.';
            setTimeout(() => {

            }, 3000);
        }

        else {
            let movietitle = { newMovieTitle };
            storeLocalStorageNewTitle(movietitle); //

            location.assign("input.html"); //redirect to input.html 
        }
    }
};


IndexSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();
    submitnewmovie();
})


//Event listener to remove the value from input #new-movie
const IndexNewMovie = document.querySelector("#new-movie");

IndexNewMovie.addEventListener('click', function (event) {
    event.preventDefault();
    IndexNewMovie.setAttribute('value', "");
})

IndexNewMovie.addEventListener('keypress', function (enter) {
    if (enter.key == "Enter") {
        enter.preventDefault();
        submitnewmovie();
    }
})


//Display movies from local storage
const tableBodyEl = document.querySelector("#tableBody")

function displaymovies() {
    let movies = readLocalStorage();
    for (i = 0; i < movies.length; i++) {
        //create table elements
        let movienameEl = document.createElement('td');
        let movieratingEl = document.createElement('td');
        let moviegenreEl = document.createElement('td');
        //update values
        movienameEl.textContent = movies[i].movieTitle;
        movieratingEl.textContent = movies[i].movieRating;
        moviegenreEl.textContent = movies[i].movieGenre;

        //display in table by creating new table row & appending
        let movierow = document.createElement('tr');
        movierow.appendChild(movienameEl);
        movierow.appendChild(movieratingEl);
        movierow.appendChild(moviegenreEl);

        tableBodyEl.appendChild(movierow);

        movierow.onclick = function () {
            let movietitlerow = movierow.children[0].textContent;
            let tempStorage = readLocalStorage();

            for (i = 0; i < tempStorage.length; i++) {

                if (tempStorage[i].movieTitle == movietitlerow) {
                    let infoTitle = tempStorage[i].movieTitle;
                    let infoRating = tempStorage[i].movieRating;
                    let infoGenre = tempStorage[i].movieGenre;
                    let infoComment = tempStorage[i].movieComments;

                    let infomovie = { infoTitle, infoRating, infoGenre, infoComment };

                    storeLocalStorageMovieInfo(infomovie);
                }
            }

            location.assign("movieinfo.html");
        };
    }
}
displaymovies();



