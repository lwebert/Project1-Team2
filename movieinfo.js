//Gather & display movie info you just clicked on

let movieInfo = readLocalStorageMovieInfo();
movieInfo = movieInfo[movieInfo.length - 1];

let headingTitle = document.querySelector("#TempInfoTitle");
headingTitle.textContent = movieInfo.infoTitle;

let RatingEl = document.querySelector("#ratingInfo")
RatingEl.textContent = movieInfo.infoRating;

let GenreEl = document.querySelector("#genreInfo")
GenreEl.textContent = movieInfo.infoGenre;

let CommentEl = document.querySelector("#commentInfo")
CommentEl.textContent = movieInfo.infoComment;


