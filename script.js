document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("page1Btn").addEventListener("click", () => gotoPage(0));
document.getElementById("page2Btn").addEventListener("click", () => gotoPage(1));
document.getElementById("page3Btn").addEventListener("click", () => gotoPage(2));

let currentSlide = 0;
const slides = document.querySelectorAll(".slider-item");
const intervalTime = 3000; // 3 seconds
let intervalId;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  resetInterval();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  resetInterval();
}

function gotoPage(pageIndex) {
  currentSlide = pageIndex;
  showSlide(currentSlide);
  resetInterval();
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, intervalTime);
}

showSlide(currentSlide);
intervalId = setInterval(nextSlide, intervalTime);