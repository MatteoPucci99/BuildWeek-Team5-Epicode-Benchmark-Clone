const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
    answer: [
      "Centrale Processing Unit",
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    answer: ["Final", "Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answer: ["True", "False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answer: ["True", "False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    answer: [".svg", ".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
    answer: [
      "Cascading Style Sheet",
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    answer: ["Nougat", "Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    answer: ["140", "120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answer: ["True", "False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    answer: ["Java", "Python", "C", "Jakarta"],
  },
];

let score = 0;
let questionCounter = 0;

const div = document.getElementById("questions");
const answerLabels = Array.from(document.getElementsByClassName("answer-text"));
const answerInputs = Array.from(document.getElementsByClassName("answer"));

const question = document.getElementById("question");

const form = document.getElementById("form");
form.addEventListener("click", (e) => {
  e.preventDefault();
});

const displayQuestionCounter = () => {
  const questionDisplay = document.getElementById("questionDisplay");
  questionDisplay.innerText = `Question ${questionCounter}/10`;
};
// Funzione per far comparire la prima domanda
const startQuestionnaire = () => {
  // console.log(answerLabels);
  // question.innerText = questions[0].question;
  // questions.splice(0, 1);
  // questionCounter++;
  // console.log(questions);
  displayQuestionCounter();
  newQuestion();
};

// Funzione che controlla quale radio input è stato selezionato

// const checkAnswer = (answersLength) => {
//   for (let i = 0; i < answersLength; i++) {
//     const answer = answerInputs[i];
//     if (answer.checked) {
//       console.log(answer.value);
//     }
//   }
// };

// Funzione per far comparire le altre domande
// Sceglie un random number che va da 0 fino alla lunghezza dell'array question.
const newQuestion = () => {
  const randomQuestIndex = Math.floor(Math.random() * questions.length);
  question.innerText = questions[randomQuestIndex].question;

  const random0to3 = Math.floor(Math.random() * 4);
  const random0to2 = Math.floor(Math.random() * 3);
  const random0to1 = Math.floor(Math.random() * 2);

  const answers = questions[randomQuestIndex].answer;
  // checkAnswer(answers.length);

  //   Se è una domanda con risposta vero e falso nascondiamo due input altrimenti mostriamo 4 input.
  if (questions[randomQuestIndex].answer.length === 2) {
    answerLabels[2].style.display = "none";
    answerLabels[3].style.display = "none";
    answerLabels[0].innerText = questions[randomQuestIndex].answer[0];
    answerLabels[1].innerText = questions[randomQuestIndex].answer[1];
  } else {
    answerLabels[3].style.display = "inline-block";
    answerLabels[2].style.display = "inline-block";
    // answerLabels[0].innerText = questions[randomNumber].answer[random0to3];
    // questions[randomNumber].answer.splice(random0to3, 1);
    // answerLabels[1].innerText = questions[randomNumber].answer[random0to2];
    // questions[randomNumber].answer.splice(random0to2, 1);
    // answerLabels[2].innerText = questions[randomNumber].answer[random0to1];
    // questions[randomNumber].answer.splice(random0to1, 1);
    // answerLabels[3].innerText = questions[randomNumber].answer[0];
    // questions.splice(randomNumber, 1);
    const answersNum = answers.length;
    for (let i = 0; i < answersNum; i++) {
      console.log("ok", answers.length);
      const randomAnswerIndex = Math.floor(Math.random() * answers.length);
      answerLabels[i].innerText = answers[randomAnswerIndex];
      answers.splice(randomAnswerIndex, 1);
    }
  }
  questions.splice(randomQuestIndex, 1);
  questionCounter++;

  console.log(questions);
  if (questionCounter === 10) {
    console.log("Domande finite");
  }
  displayQuestionCounter();
};

startQuestionnaire();
const button = document.getElementById("next");
button.addEventListener("click", newQuestion);
