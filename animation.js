// You can add animations or interactive elements using JavaScript here.
// For a simple page, you may not need JavaScript.

// Example: Add a bouncing animation to the cake
const cake = document.getElementById('cake');

cake.addEventListener('mouseover', () => {
    cake.style.transition = 'transform 0.5s ease-in-out';
    cake.style.transform = 'scale(1.1)';
});

cake.addEventListener('mouseout', () => {
    cake.style.transition = 'transform 0.5s ease-in-out';
    cake.style.transform = 'scale(1)';
});

