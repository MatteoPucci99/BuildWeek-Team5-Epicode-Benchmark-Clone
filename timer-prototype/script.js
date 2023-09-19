// FUNZIONE TIMER 1:

let number = document.getElementsByTagName("h2")[0];
let counter = 60;
setInterval(() => {
  if (counter === 0) {
    clearInterval();
  } else {
    counter -= 1;
    number.innerText = counter;
  }
}, 1000);

// let circularProgression = document.querySelector(".circular-progress");
// let progressValue = document.querySelector(".progress-value");

// let progressStartValue = 0,
//   progressEndValue = 60,
//   speed = 1000;
// if (progressEndValue == 0) {
//   circularProgression.style.background = "blue";
//   progressValue.textContent = `${progressStartValue}`;
// } else {
//   const progress = setInterval(() => {
//     progressEndValue--;

//     progressValue.textContent = `${progressEndValue}`;
//     circularProgression.style.background = `conic-gradient(hsl(318.07deg 83.02% 41.57%)0deg ${
//       progressStartValue * 6
//     }deg, hsl(180deg 100% 50%) 0deg)`;

//     if (progressStartValue == progressEndValue) {
//       clearInterval(progress);
//     }
//   }, speed);
// }
