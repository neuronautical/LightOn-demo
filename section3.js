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