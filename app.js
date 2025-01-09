// selectors

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const leftArrow = document.querySelector(".fa-circle-left");
const rightArrow = document.querySelector(".fa-circle-right");
const leftText = document.querySelector(".left-text");
const rightText = document.querySelector(".right-text");
const leftHeader = document.querySelector(".left-header");
const rightHeader = document.querySelector(".right-header");

// event listeners
// console.log(arrows.classList)

left.addEventListener("click", (event) => {
  event.target.classList.toggle("scaleUp");
  leftText.classList.toggle("hidden");
  rightArrow.classList.toggle("flipArrow");

  if (left.classList.contains("scaleUp")) {
    leftHeader.classList.add("hidden");
    left.style.zIndex = 10;
  } else {
    leftHeader.classList.remove("hidden");
    left.style.zIndex = 1;
  }
  if (right.classList.contains("scaleUp")) {
    right.classList.remove("scaleUp");
    rightHeader.classList.remove("hidden");
    rightText.classList.add("hidden");
    leftArrow.classList.toggle("flipArrow");
    right.style.zIndex = 1;
  }
});

right.addEventListener("click", (event) => {
  event.target.classList.toggle("scaleUp");
  rightText.classList.toggle("hidden");
  leftArrow.classList.toggle("flipArrow");

  if (right.classList.contains("scaleUp")) {
    rightHeader.classList.add("hidden");
    right.style.zIndex = 10;
  } else {
    rightHeader.classList.remove("hidden");
    right.style.zIndex = 1;
  }
  if (left.classList.contains("scaleUp")) {
    left.classList.remove("scaleUp");
    leftHeader.classList.remove("hidden");
    leftText.classList.add("hidden");
    rightArrow.classList.toggle("flipArrow");
    left.style.zIndex = 1;
  }
});
