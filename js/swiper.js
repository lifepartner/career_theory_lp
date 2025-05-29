const swiperWrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".swiper-slide");
const prevBtn = document.querySelector(".swiper-prev");
const nextBtn = document.querySelector(".swiper-next");

let currentIndex = 0;

function updateSlidePosition() {
  swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateNavigationButtons(); // Call to update button styles
}

function updateNavigationButtons() {
  // Disable prev button if at the first slide
  if (currentIndex === 0) {
    prevBtn.style.opacity = "0.5";
    prevBtn.style.pointerEvents = "none";
  } else {
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "auto";
  }

  // Optional: Disable next button at last slide
  if (currentIndex === slides.length - 1) {
    nextBtn.style.opacity = "0.5";
    nextBtn.style.pointerEvents = "none";
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "auto";
  }
}

// Initial call to set the button state correctly
updateNavigationButtons();

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});
