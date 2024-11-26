const stars = document.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener("click", function() {
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

//Function to read local storage
//function readLocalStorage() {
//    let storage = JSON.parse(localStorage.getItem('')) //using local storage key name ""
//}

//Function to store local storage


//Redirect pages
//index.html Submit button --> input.html
// const IndexSubmitEl = 

//input.html Submit button --> index.html

//movieinfo.html Edit button --> input.html

//movieinfo.html Home button --> index.html

