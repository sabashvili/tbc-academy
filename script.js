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

document.getElementById("question1").addEventListener("click", function () {
  toggleAnswer("answer1");
});

document.getElementById("question2").addEventListener("click", function () {
  toggleAnswer("answer2");
});

document.getElementById("question3").addEventListener("click", function () {
  toggleAnswer("answer3");
});

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
  const header = document.querySelector(".main-header");

  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  }
  window.addEventListener("scroll", handleScroll);
});
