const scoreFeedback = localStorage.getItem("savedScore");
const questionsFeedback = localStorage.getItem("savedQuestions");
const correctAnswersPerCent = (scoreFeedback / questionsFeedback) * 100;
const wrongAnswersPerCent = 100 - correctAnswersPerCent;

let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let resulText = document.getElementsByClassName("textInsideCircle");
let progressStartValue = 0,
  progressEndValue = wrongAnswersPerCent,
  speed = 20;
// RESET DEL FORM
const rateUs = document.getElementById("formResult");
rateUs.addEventListener("submit", (e) => {
  e.preventDefault();
});

if (wrongAnswersPerCent >= 50) {
  const progress = setInterval(() => {
    progressStartValue++;
    progressValue.innerHTML = `<div class="textInsideCircle">
       <div class="titleInsideCircle">
         <h3>Sorry,</h3>
         <h3><span> you failed the exam.</span></h3>
       </div>
       <div class="pInsideCircle">
         <p>
           Retry the exam <br> to receive the certificate.
         </p>
       </div>
    </div>`;

    circularProgression.style.background = `conic-gradient( #D20094 ${
      progressStartValue * 3.6
    }deg, #00FFFF  0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
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
    circularProgression.style.background = `conic-gradient( #D20094 ${
      progressStartValue * 3.6
    }deg, #00FFFF  0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

const correctDisplay = Array.from(
  document.getElementsByClassName("correct")
)[0];
const wrongDisplay = Array.from(document.getElementsByClassName("wrong"))[0];

correctDisplay.innerHTML = `<p>Correct</p>
                            <p class="firstLine"> ${correctAnswersPerCent}%</p>
                            <p class="answer">${scoreFeedback}/${questionsFeedback} question</p>`;
wrongDisplay.innerHTML = `  <p>Wrong</p>
                            <p class=firstLine> ${wrongAnswersPerCent}%</p>
                            <p class="answer">${
                              questionsFeedback - scoreFeedback
                            }/${questionsFeedback} question</p>`;
wrongDisplay.style.textAlign = "right";

const goToFeedback = () => {
  document.location.href = "../feedbackPage/feedback.html";
};

const resultButton = document.getElementById("btnRate");
resultButton.addEventListener("click", goToFeedback);
