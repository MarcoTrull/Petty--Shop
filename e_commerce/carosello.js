document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let counter = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextSlide() {
        counter = (counter + 1) % totalSlides;
        showSlide(counter);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2000); // Cambia immagine ogni 2 secondi (2000ms)
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide();

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    prevButton.addEventListener('click', function() {
        counter = (counter - 1 + totalSlides) % totalSlides;
        showSlide(counter);
    });

    nextButton.addEventListener('click', function() {
        nextSlide();
    });
});