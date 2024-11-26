//index.html Submit button redirect to input.html
const IndexSubmitEl = document.querySelector("#index-submit"); //Submit button on index.html
const error = document.getElementById('error1');
IndexSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let newMovieTitle = document.querySelector("#new-movie").value;

    if (!newMovieTitle) {
        //add pop-up saying to enter movie title!
        error.textContent = 'Please enter movie title.';
        setTimeout (() => {
            error.textContent = '';
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
function displaymovies() {
    const tableBodyEl = document.querySelector("#tableBody")
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
        movieratingEl.textContent = movies[i].movieRating, "★";
        moviegenreEl.textContent = movies[i].movieGenre;

        //display in table by creating new table row & appending
        let movierow = document.createElement('tr');
        movierow.appendChild(movienameEl);
        movierow.appendChild(movieratingEl);
        movierow.appendChild(moviegenreEl);

        movierow.onclick = function () {
            //LEAVE all of this for now, Lauren is working on making it go to movieinfo.index based on where you click on the table
            
            // console.log(movierow);
            // console.log(movierow.children);
            // console.log(movierow.children.length);
            // console.log(movierow.children[2].textContent);

            // storeLocalStorageMovieInfo(movierow);
            // location.assign("movieinfo.html")
        };

        tableBodyEl.appendChild(movierow);
    }
}
displaymovies();







