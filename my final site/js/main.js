document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    let slides = document.querySelectorAll('.hero .slide');
    let totalSlides = slides.length;

    function showSlides() {
        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');

        // Increment slide index
        slideIndex++;
        if (slideIndex > totalSlides) { slideIndex = 1; }

        // Display the current slide
        slides[slideIndex - 1].style.display = 'block';

        // Repeat the function every 3 seconds
        setTimeout(showSlides, 3000);
    }

    // Initialize the slider
    showSlides();
});
