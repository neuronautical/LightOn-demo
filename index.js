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







document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".service-content");
  const upButton = document.querySelector(".prev-button");
  const downButton = document.querySelector(".next-button");
  const slideCounter = document.querySelector(".slide-counter");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("slide-in");
    slides[currentSlide].classList.add("slide-out");

    currentSlide = n;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.remove("slide-out");
    slides[currentSlide].classList.add("slide-in");
    slideCounter.textContent = `${currentSlide + 1}/${slides.length}`;
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPrevSlide() {
    showSlide(currentSlide - 1);
  }

  upButton.addEventListener("click", showPrevSlide);
  downButton.addEventListener("click", showNextSlide);

  // Hide all slides initially, except the first one
  for (let i = 1; i < slides.length; i++) {
    slides[i].classList.add("slide-out");
  }

  showSlide(currentSlide);
});


document.addEventListener("DOMContentLoaded", function () {
  const widgetContainer = document.querySelector(".widget-container");
  const calendlyWidget = document.querySelector(".calendly-inline-widget");
  const showCalendlyButton = document.querySelector("#showCalendly");

  // Show or hide the Calendly widget and widget container
  function toggleCalendly() {
    if (calendlyWidget.style.display === "none") {
      calendlyWidget.style.display = "flex";
      widgetContainer.style.display = "none";
    } else {
      calendlyWidget.style.display = "none";
      widgetContainer.style.display = "flex";
    }
  }

  // Attach a click event listener to the "Schedule Consultation" button
  showCalendlyButton.addEventListener("click", toggleCalendly);
});

