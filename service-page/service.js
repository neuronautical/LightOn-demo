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
