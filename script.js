// JavaScript file

console.log('Barbara Brandt Aesthetics - Website loaded successfully!');

// Carousel Dots Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));

            // Add active class to clicked dot
            this.classList.add('active');

            // Here you can add logic to change the hero image
            console.log(`Carousel slide ${index + 1} selected`);
        });
    });

    // Auto-rotate carousel (optional)
    let currentSlide = 0;
    const totalSlides = dots.length;

    function autoRotate() {
        currentSlide = (currentSlide + 1) % totalSlides;

        dots.forEach(d => d.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    // Uncomment to enable auto-rotation every 5 seconds
    // setInterval(autoRotate, 5000);
});
