//General local storage
//Function to read local storage
function readLocalStorage() {
    let storage = JSON.parse(localStorage.getItem('movies')) //using local storage key name "movies"

    if (storage === null) {
        storage = [];
    }
    return storage;
}

//Function to store local storage
function storeLocalStorage(movie) {
    let moviedata = readLocalStorage(); //To get a copy of the array of movies from local storage
    moviedata.push(movie); //Add new movie to array
    localStorage.setItem('movies', JSON.stringify(moviedata)); //Re-save the updated array to local storage
}




//functions to read & store local storage for new movie name index.html to input.html
function readLocalStorageNewTitle() {
    let title = JSON.parse(localStorage.getItem('newtitle')) //using local storage key name "newtitle"

    if (title === null) {
        title = [];
    }
    return title;
}

function storeLocalStorageNewTitle(title) {
    let newTitle = readLocalStorageNewTitle(); //To get a copy of the array of movies from local storage
    newTitle.push(title); //Add new movie to array
    localStorage.setItem('newtitle', JSON.stringify(newTitle)); //Re-save the updated array to local storage
}




//Function to read & store local storage - for getting specific movie info from table
function readLocalStorageMovieInfo() {
    let info = JSON.parse(localStorage.getItem('movieinfo')) //using local storage key name "movieinfo"

    if (info === null) {
        info = [];
    }
    return info;
}

function storeLocalStorageMovieInfo(info) {
    let movieinfo = readLocalStorageMovieInfo(); //To get a copy of the array of movies from local storage
    movieinfo.push(info); //Add new movie to array
    localStorage.setItem('movieinfo', JSON.stringify(movieinfo)); //Re-save the updated array to local storage
}
