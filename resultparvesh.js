let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let resulText = document.getElementsByClassName("textInsideCircle")
let progressStartValue = 0,
  progressEndValue = 70,
  speed = 20;
if (progressEndValue == 0) {
  circularProgression.style.background = "blue";
  progressValue.textContent = `${progressStartValue}%`;
} else {
  const progress = setInterval(() => {
    progressStartValue++;

    progressValue.innerHTML = `<div class="textInsideCircle">
    <div class="titleInsideCircle">
      <h3>Congratulations</h3>
      <h3><span> you passed the exam.</span></h3>
    </div>
    <div class="pInsideCircle">
      <p>
        We'll send you the certificate<br />in few minutes.<br />Check
        your email (including<br />promotions / spam folder)
      </p>
    </div>
  </div>`;
    circularProgression.style.background = `conic-gradient(#D20094 ${
      progressStartValue * 3.6
    }deg, #00FFFF 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
