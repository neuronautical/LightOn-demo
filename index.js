//  HEADER ELEMENT CODE
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
let lastScrollY = 0; // Variables to keep track of scroll direction







// SLIDER GALLERY CODE
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".service-content");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const slideCounter = document.querySelector(".slide-counter");
    let currentSlide = 1;
  
    function showSlide(n) {
      if (n > slides.length) {
        currentSlide = 1;
      } else if (n < 1) {
        currentSlide = slides.length;
      }
  
      slides.forEach(slide => (slide.style.display = "none"));
      slides[currentSlide - 1].style.display = "flex";
      slideCounter.textContent = `${currentSlide}/${slides.length}`;
    }
  
    function showNextSlide() {
      currentSlide++;
      showSlide(currentSlide);
    }
  
    function showPrevSlide() {
      currentSlide--;
      showSlide(currentSlide);
    }
  
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);
  
    showSlide(currentSlide);
  });