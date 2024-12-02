const stars = document.querySelectorAll('.star');
const modalBody = document.querySelector('.modal-body'); //This is the variable to manipulate the modal.

stars.forEach(star => {
    star.addEventListener('click', () => {
        rating = parseInt(star.getAttribute('data-value'));
        fillStars(rating);
        localStorage.setItem('rating', rating);
    });

    star.addEventListener('mouseover', () => {
        fillStars(parseInt(star.getAttribute('data-value')));
    });

    star.addEventListener('mouseout', () => {
        fillStars(rating);
    });
});

function fillStars(value) {
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= value) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}


//Load new movie title into input.html based on index.html
const movieTitleEl = document.querySelector("#enter-movie-title"); //Element in input.html for the movie title
function loadMovieTitle() {
    let newTitle = readLocalStorageNewTitle();

    if (!newTitle) { }
    else {
        movieTitleEl.setAttribute('value', newTitle[(newTitle.length - 1)].newMovieTitle); //automatically set the movie title to the last movie title you stored in local storage from index.html
    }
}
loadMovieTitle();

//input.html Submit button --> index.html
const InputSubmitEl = document.querySelector("#input-submit");

InputSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let movieTitle = document.querySelector("#enter-movie-title").value;
    let movieRating = rating;
    let movieGenre = document.querySelector("#genre").value;
    let movieComments = document.querySelector("#comments").value;

    // if (!movieTitle || isNaN(movieRating) || !movieGenre || !movieComments) {
    if (!movieTitle || isNaN(movieRating) || !movieGenre || !movieComments) {
        //add pop-up saying to enter all information before submitting

        modalBody.textContent = 'Please fill out all fields.';
        setTimeout(() => {

        }, 3000);

    }
    else {
        let movie = {
            // movieTitle, movieRating, movieGenre, movieComments
            movieTitle, movieRating, movieGenre, movieComments
        };

        modalBody.textContent = 'Success. You have succesfully submitted all the movie information. You will be redirected to the Home page.';
        setTimeout(() => {
            location.assign("index.html") //Redirect to the Home Page after 5 seconds.
        }, 5000);

        storeLocalStorage(movie);

    }
})
