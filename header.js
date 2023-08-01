// Get the header element
const header = document.querySelector('.main-header');

// Define the scroll threshold where the header switches between stationary and scrolling
const scrollThreshold = 150;

// Function to handle the scrolling behavior
function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY <= scrollThreshold) {
        // If scroll position is within the threshold, make the header stationary
        header.classList.remove('sticky', 'active');
    } else {
        // If scroll position is beyond the threshold, make the header sticky and active
        header.classList.add('sticky', 'active');
    }

    // Smoothly show/hide header on scroll direction
    if (scrollY > lastScrollY && scrollY > scrollThreshold) {
        header.style.top = '-150px'; // Move header out of view (scrolling down)
    } else {
        header.style.top = '0'; // Move header back into view (scrolling up)
    }
    lastScrollY = scrollY;
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Function to handle highlighting the active anchor tag
function handleActiveMenuLink() {
    /* ... Previous code ... */
}

// Attach the scroll event listener for highlighting the active anchor tag
window.addEventListener('scroll', handleActiveMenuLink);

// Variables to keep track of scroll direction
let lastScrollY = 0;

