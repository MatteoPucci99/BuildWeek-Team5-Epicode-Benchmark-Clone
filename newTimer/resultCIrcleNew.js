let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let timerCounter = 30;
const deleteOne = 1;

setInterval(() => {
  if (timerCounter === 0) {
    timerCounter = 30;
  } else {
    timerCounter -= deleteOne;
    progressValue.innerText = timerCounter;
    circularProgression.style.background = `inherit
     ${timerCounter * 12}deg, hsl(0, 0%, 87%) 0deg)`;
  }
}, 1000);
