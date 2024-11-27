//index.html Submit button redirect to input.html
const IndexSubmitEl = document.querySelector("#index-submit"); //Submit button on index.html

IndexSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let newMovieTitle = document.querySelector("#new-movie").value;

    if (!newMovieTitle) {
        //add pop-up saying to enter movie title!
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
        console.log(movies[i]);

        //create table elements
        let movienameEl = document.createElement('td');
        let movieratingEl = document.createElement('td');
        let moviegenreEl = document.createElement('td');

        //update values
        movienameEl.textContent = movies[i].movieTitle;
        movieratingEl.textContent = "";
        moviegenreEl.textContent = movies[i].movieGenre;

        //display in table by creating new table row & appending
        let movierow = document.createElement('tr');
        movierow.appendChild(movienameEl);
        movierow.appendChild(movieratingEl);
        movierow.appendChild(moviegenreEl);

        // movierow.setAttribute('onClick', )

        tableBodyEl.appendChild(movierow);
    }
}

displaymovies();


//event listener on table to take it to movieinfo.html
const tableBodyEl = document.querySelector("#tableBody")
tableBodyEl.addEventListener('click', function (event) {
    let moviesdisplayed = document.querySelectorAll("tr");
    console.log(moviesdisplayed);
    console.log(moviesdisplayed.childNodes);

    // for (i=0; i<moviesdisplayed; i++) {}

})




const stars = document.querySelectorAll('.star');
let rating = 0;
const savedRating = localStorage.getItem('rating');
if (savedRating) {
    rating = parseInt(savedRating);
    fillStars(rating);
}
