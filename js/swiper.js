const swiperWrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".swiper-slide");
const prevBtn = document.querySelector(".button-prev");
const nextBtn = document.querySelector(".button-next");

let currentIndex = 0;

function updateSlidePosition() {
  swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

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
