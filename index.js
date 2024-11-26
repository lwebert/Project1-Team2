//index.html Submit button redirect to input.html
const IndexSubmitEl = document.querySelector("#index-submit"); //Submit button on index.html

IndexSubmitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let newMovieTitle = document.querySelector("#new-movie").value;

    if (!newMovieTitle) {
        //add pop-up saying to enter movie title!
    }
    else {
        let movieName = { newMovieTitle };
        storeLocalStorage(movieName); //

        location.assign("input.html") //redirect to input.html
    }
})


