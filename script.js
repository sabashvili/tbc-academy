const rightsBtn = document.getElementById("rights-btn");
const rights = document.querySelector(".rights");
const slides = document.querySelectorAll(".slider-item");
const overlay = document.querySelector(".overlay");
const rightsCloseBtn = document.querySelector(".close-btn");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("mobile-close-btn");
const header = document.querySelector(".main-header");
const navBar = document.querySelector(".main-nav");

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("page1Btn").addEventListener("click", () => gotoPage(0));
document.getElementById("page2Btn").addEventListener("click", () => gotoPage(1));
document.getElementById("page3Btn").addEventListener("click", () => gotoPage(2));
document.getElementById("question1").addEventListener("click", function () {
  toggleAnswer("answer1");
});
document.getElementById("question2").addEventListener("click", function () {
  toggleAnswer("answer2");
});
document.getElementById("question3").addEventListener("click", function () {
  toggleAnswer("answer3");
});
rightsBtn.addEventListener("click", () => toggleRight());

let currentSlide = 0;
const intervalTime = 3000;
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

function toggleAnswer(answerId) {
  let answer = document.getElementById(answerId);

  let allAnswers = document.querySelectorAll(".asked-question-answer");
  allAnswers.forEach((el) => {
    if (el.id !== answerId) {
      el.classList.remove("visible");
    }
  });

  if (answer.classList.contains("visible")) {
    answer.classList.remove("visible");
  } else {
    answer.classList.add("visible");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  }
  window.addEventListener("scroll", handleScroll);
});

const toggleRight = () => {
  overlay.classList.toggle("hidden");
};

const closeRightsBar = (e) => {
  if (!rightsBtn.contains(e.target) && !rights.contains(e.target)) {
    if (!overlay.classList.contains("hidden")) {
      overlay.classList.add("hidden");
    }
  }
};

document.addEventListener("click", closeRightsBar);

rightsCloseBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

mobileMenuBtn.addEventListener("click", () => {
  header.classList.add("nav-open");
});

closeMenuBtn.addEventListener("click", () => {
  header.classList.remove("nav-open");
});

const closeMobileNavBar = (e) => {
  if (!mobileMenuBtn.contains(e.target) && !navBar.contains(e.target)) {
    header.classList.remove("nav-open");
  }
};

document.addEventListener("click", closeMobileNavBar);
