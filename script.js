const stars = document.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('click', function() {
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