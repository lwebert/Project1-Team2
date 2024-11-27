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

function fillStars(ratingValue) {
    stars.forEach(star => {
        if (localStorage.getItem('movieRating') <= ratingValue) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

//Event listener to remove the value from input #new-movie
const IndexNewMovie = document.querySelector("#new-movie");

IndexNewMovie.addEventListener('click', function (event) {
    event.preventDefault();
    IndexNewMovie.setAttribute('value', "");
})



function fillStars(ratingValue) {
    stars.forEach(star => {
        if (localStorage.getItem('movieRating') <= ratingValue) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}
