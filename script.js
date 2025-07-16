// 1. Get references to our elements
const zoomImage = document.getElementById('zoomImage');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');

// 2. Initialize the state
let currentScale = 1.0; // 1.0 means 100% (original size)
const scaleStep = 0.1; // How much to zoom in/out with each click

// 3. Add event listeners to the buttons

// When the Zoom In button is clicked...
zoomInBtn.addEventListener('click', () => {
    // Increase the scale, but not infinitely
    currentScale += scaleStep;
    applyZoom();
});

// When the Zoom Out button is clicked...
zoomOutBtn.addEventListener('click', () => {
    // Decrease the scale, but don't let it become zero or negative
    if (currentScale > scaleStep * 2) { // Prevents getting too small
        currentScale -= scaleStep;
        applyZoom();
    }
});

// 4. Function to apply the transform to the image
function applyZoom() {
    // Use the CSS 'transform' property to scale the image
    // A template literal `...` is used for easy variable injection
    zoomImage.style.transform = `scale(${currentScale})`;
}
