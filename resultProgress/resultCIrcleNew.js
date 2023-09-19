let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 70,
  speed = 20;
if (progressEndValue == 0) {
  circularProgression.style.background = "blue";
  progressValue.textContent = `${progressStartValue}%`;
} else {
  const progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgression.style.background = `conic-gradient(#ff00d9 ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
