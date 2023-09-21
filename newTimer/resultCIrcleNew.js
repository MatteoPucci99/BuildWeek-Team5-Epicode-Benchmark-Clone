let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let newCount = 0;

let timerCounter = 30;
const deleteOne = 1;

setInterval(() => {
  if (timerCounter === 0) {
    timerCounter = 30;
    newCount = 0;
  } else {
    timerCounter -= deleteOne;
    newCount++;
    progressValue.innerText = timerCounter;
    circularProgression.style.background = `conic-gradient( #00FFFF ${
      newCount * 12
    }deg,#D20094  0deg)`;
  }
}, 1000);
