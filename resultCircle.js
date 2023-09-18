let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 90,
  speed = 20;

const progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgression.style.background = `conic-gradient(#7d2ae8 ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
