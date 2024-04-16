let currentImageIndex = 0;
const images = ["img1.jpg", "img9.jpg", "img10.jpg"]; 

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('.first img').src = images[currentImageIndex];
}

// Set up a timer to change images every 3 seconds
setInterval(showNextImage, 3000);