const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', function () {
        const ratingValue = this.dataset.value;
        fillStars(ratingValue);
    });
});

function fillStars(ratingValue) {
    stars.forEach(star => {
        if (star.dataset.value <= ratingValue) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}



//function to load new movie title into input.html based on index.html
// const movieTitleEl = document.querySelector("#enter-movie-title"); //Element in input.html for the movie title
// movieTitleEl.setAttribute('value', movieName);


//input.html Submit button --> index.html
const InputSubmitEl = document.querySelector("#input-submit");

InputSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let movieTitle = document.querySelector("#enter-movie-title").value;
    let movieRating = document.querySelector("#movie-rating").value;
    let movieGenre = document.querySelector("#genre").value;
    let movieComments = document.querySelector("#comments").value;


    if (!movieTitle || !movieRating || !movieGenre || !movieComments) {
        //add pop-up saying to enter all information before submitting
    }
    else {
        let movie = {
            movieTitle, movieRating, movieGenre, movieComments
        };

        storeLocalStorage(movie); //

        location.assign("index.html") //redirect to index.html
    }
})
