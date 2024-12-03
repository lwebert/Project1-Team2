//index.html Submit button redirect to input.html
const IndexSubmitEl = document.querySelector("#index-submit"); //Submit button on index.html
const error = document.getElementById('error1');
const modalBody = document.querySelector('.modal-body');
let existingMovie = JSON.parse(localStorage.getItem('movies'));

IndexSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let newMovieTitle = document.querySelector("#new-movie").value;

    if (!newMovieTitle) {
        //add pop-up saying to enter movie title!
        modalBody.textContent = 'Please enter movie title.';
        setTimeout(() => {

        }, 3000);
    }

    else if (existingMovie.some(item => item.movieTitle === newMovieTitle)) {
        //add pop-up for duplicate movie titles

        modalBody.textContent = 'Movie already exists.';
        setTimeout(() => {

        }, 3000);

    }

    else {
        let movietitle = { newMovieTitle };
        storeLocalStorageNewTitle(movietitle); //

        location.assign("input.html"); //redirect to input.html
    }
})



//Event listener to remove the value from input #new-movie
const IndexNewMovie = document.querySelector("#new-movie");

IndexNewMovie.addEventListener('click', function (event) {
    event.preventDefault();
    IndexNewMovie.setAttribute('value', "");
})


//Display movies from local storage
const tableBodyEl = document.querySelector("#tableBody")

function displaymovies() {
    let movies = readLocalStorage();
    console.log(`Number of movies to display is ${movies.length}.`);
    for (i = 0; i < movies.length; i++) {
        // console.log(movies[i]);

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
            // console.log(movierow.children[0].textContent);
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



