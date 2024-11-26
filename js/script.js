// script.js

let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.card');
    const totalSlides = slides.length;
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    
    const carousel = document.querySelector('.cards');
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}
