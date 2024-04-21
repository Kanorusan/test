// Get the button element with ID 'noo'
const nooButton = document.getElementById('noo');

// Function to generate a random position
function getRandomPosition() {
    // Get viewport dimensions
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    // Get button dimensions
    const buttonWidth = nooButton.offsetWidth;
    const buttonHeight = nooButton.offsetHeight;

    // Calculate maximum X and Y positions to avoid overlap
    const maxX = vw - buttonWidth;
    const maxY = vh - buttonHeight;

    // Calculate random coordinates within bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Set button position
    nooButton.style.position = 'fixed';
    nooButton.style.left = `${randomX}px`;
    nooButton.style.top = `${randomY}px`;
}

// Event listener for button hover
nooButton.addEventListener('mouseenter', getRandomPosition);
nooButton.addEventListener('onclick', getRandomPosition);