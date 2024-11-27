const stars = document.querySelectorAll('.star');
const error = document.getElementById('error');

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
let newTitle = readLocalStorageNewTitle();

movieTitleEl.setAttribute('value', newTitle[(newTitle.length -1)].newMovieTitle); //automatically set the movie title to the last movie title you stored in local storage from index.html


//input.html Submit button --> index.html
const InputSubmitEl = document.querySelector("#input-submit");

InputSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let movieTitle = document.querySelector("#enter-movie-title").value;
    let movieRating = document.querySelector("#movie-rating").value;
    let movieGenre = document.querySelector("#genre").value;
    let movieComments = document.querySelector("#comments").value;

    // if (!movieTitle || !movieRating || !movieGenre || !movieComments) {
    if (!movieTitle || !movieRating|| !movieGenre || !movieComments) {
        //add pop-up saying to enter all information before submitting
    
        error.textContent = 'Please fill out all fields.';
        setTimeout (() => {
            error.textContent = '';
        }, 3000);

    }
    else {
        let movie = {
            // movieTitle, movieRating, movieGenre, movieComments
            movieTitle, movieRating, movieGenre, movieComments
        };

        storeLocalStorage(movie); //

        location.assign("index.html") //redirect to index.html
    }
})
