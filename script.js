// Selectors
const rightsBtn = document.getElementById("rights-btn");
const rights = document.querySelector(".rights");
const slides = document.querySelectorAll(".slider-item");
const overlay = document.querySelector(".overlay");
const rightsCloseBtn = document.querySelector(".close-btn");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("mobile-close-btn");
const header = document.querySelector(".main-header");
const navBar = document.querySelector(".main-nav");

// Event Listeners
document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

const pageButtons = document.querySelectorAll('[id^="page"]');
pageButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => gotoPage(index));
});

const questionButtons = document.querySelectorAll('[id^="question"]');
questionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => toggleAnswer(`answer${index + 1}`));
});

rightsBtn.addEventListener("click", toggleRight);
document.addEventListener("DOMContentLoaded", handleScroll);
document.addEventListener("click", closeRightsBar);
rightsCloseBtn.addEventListener("click", () => overlay.classList.add("hidden"));
mobileMenuBtn.addEventListener("click", () => header.classList.add("nav-open"));
closeMenuBtn.addEventListener("click", () => header.classList.remove("nav-open"));
document.addEventListener("click", closeMobileNavBar);

// Functions
let currentSlide = 0;
const intervalTime = 3000;
let intervalId;

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
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

function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);
  const allAnswers = document.querySelectorAll(".asked-question-answer");

  allAnswers.forEach((el) => {
    if (el.id !== answerId) el.classList.remove("visible");
  });

  answer.classList.toggle("visible");
}

function handleScroll() {
  window.addEventListener("scroll", () => {
    header.classList.toggle("fixed-header", window.scrollY > 0);
  });
}

function toggleRight() {
  overlay.classList.toggle("hidden");
}

function closeRightsBar(e) {
  if (!rightsBtn.contains(e.target) && !rights.contains(e.target)) {
    if (!overlay.classList.contains("hidden")) overlay.classList.add("hidden");
  }
}

function closeMobileNavBar(e) {
  if (!mobileMenuBtn.contains(e.target) && !navBar.contains(e.target)) {
    header.classList.remove("nav-open");
  }
}

// Initial setup
showSlide(currentSlide);
intervalId = setInterval(nextSlide, intervalTime);
handleScroll(); // Call handleScroll function to set initial header state
