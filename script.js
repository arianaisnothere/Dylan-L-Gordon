// JavaScript file

console.log('KD Aesthetics - Website loaded successfully!');

// Hero Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        currentSlide = index;
    }

    // Click functionality for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
    });

    // Auto-rotate carousel every 5 seconds
    function autoRotate() {
        const nextSlide = (currentSlide + 1) % totalSlides;
        goToSlide(nextSlide);
    }

    setInterval(autoRotate, 5000);

    // Photo Upload Functionality
    const photoUpload = document.getElementById('photo-upload');
    const fileNameDisplay = document.querySelector('.file-name-display');
    const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes

    if (photoUpload) {
        photoUpload.addEventListener('change', function(e) {
            const files = e.target.files;
            const validFiles = [];
            const oversizedFiles = [];

            // Check each file size
            Array.from(files).forEach(file => {
                if (file.size > maxFileSize) {
                    oversizedFiles.push(file.name);
                } else {
                    validFiles.push(file);
                }
            });

            // Display results
            if (oversizedFiles.length > 0) {
                alert(`The following files exceed 5MB and cannot be uploaded:\n${oversizedFiles.join('\n')}\n\nPlease choose smaller files.`);
                fileNameDisplay.textContent = '';
                photoUpload.value = ''; // Clear the input
            } else if (validFiles.length > 0) {
                const fileNames = validFiles.map(file => file.name).join(', ');
                const totalSize = validFiles.reduce((sum, file) => sum + file.size, 0);
                const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
                fileNameDisplay.textContent = `Selected: ${fileNames} (Total: ${totalSizeMB}MB)`;
            } else {
                fileNameDisplay.textContent = '';
            }
        });
    }
});
