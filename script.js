const leftBtn = document.querySelector('.slider-btn-left');
const rightBtn = document.querySelector('.slider-btn-right');
const movieSlider = document.querySelector('.movies');

leftBtn.addEventListener('click', () => {
    movieSlider.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    movieSlider.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
