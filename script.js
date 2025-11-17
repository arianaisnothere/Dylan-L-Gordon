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
