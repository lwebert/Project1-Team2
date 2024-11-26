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




