document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".service-content");
  const upButton = document.querySelector(".prev-button"); // Changed from ".prev-button"
  const downButton = document.querySelector(".next-button"); // Changed from ".next-button"
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

  upButton.addEventListener("click", showPrevSlide); // Swap event listeners for up and down buttons
  downButton.addEventListener("click", showNextSlide);

  showSlide(currentSlide);
});


  