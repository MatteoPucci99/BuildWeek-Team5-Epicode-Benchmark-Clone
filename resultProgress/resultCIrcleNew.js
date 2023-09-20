let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 60,
  progressEndValue = 0,
  speed = 1000;
if (progressStartValue === 0) {
  // circularProgression.style.background = "blue";
  progressValue.textContent = `${progressStartValue}`;
} else {
  const progress = setInterval(() => {
    progressStartValue--;

    progressValue.textContent = `${progressStartValue}`;
    circularProgression.style.background = `conic-gradient(hsl(180deg 100% 50%) 
    ${progressStartValue * 6}deg, hsl(0, 0%, 87%) 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
// hsl(180deg 100% 50%)
