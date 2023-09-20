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
      "Central Processing Unit",
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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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
    answer: ["False", "True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answer: ["False", "True"],
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
    answer: ["False", "True"],
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

// INDICE ELEMENTI
let questionCounter = 0;
let score = 0;
let avaibleQuestions = [];
const questionTitle = document.getElementById("main-question");
const par = Array.from(document.getElementsByClassName("cards-text"));
const button = document.getElementById("button");
const div = Array.from(document.getElementsByClassName("cards"));
const counter = document.getElementById("counter");
let myAnswer = "";
const circle = document.getElementsByTagName("circle")[0];
console.log(circle);
let number = document.getElementsByTagName("h2")[0];
let circularProgression = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let timerCounter = 30;
const deleteOne = 1;

// let timerCounter = 30;
// const deleteOne = 1;

// TIMER FUNCTION

const timer = () => {
  setInterval(() => {
    if (timerCounter === 0) {
      timerCounter = 30;
      newQuestion();
    } else {
      timerCounter -= deleteOne;
      progressValue.innerHTML = `<p class='count-down'>SECONDS</p> ${timerCounter} <p class='count-down'>REMAINING</p>`;
      circularProgression.style.background = `conic-gradient(hsl(180deg 100% 50%)
     ${timerCounter * 12}deg, hsl(0, 0%, 87%) 0deg)`;
    }
  }, 1000);
};

timer();

// RESET DEL FORM
// const preventDefaultButton = document.getElementById("form");
// preventDefaultButton.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// STARTING POINT
const startTest = () => {
  let questionCounter = 0;
  let score = 0;
  // avaibleQuestions = [...questions];
  // questionTitle.innerText = questions[0].question;
  // questions.splice(0, 1);
  newQuestion();
};

// NEW QUESTION FUNCTION
const newQuestion = () => {
  if (questionCounter === 10) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  questionTitle.innerText = questions[randomIndex].question;
  arrayNumbers = [];

  // AD OGNI CLICK MI RIPRISTINA TUTTE LE CASELLE
  for (let i = 0; i < div.length; i++) {
    div[i].style.visibility = "visible";
  }

  // CICLO WHILE PER GENERARE NUMERI RANDOM TUTTI DIVERSI
  while (arrayNumbers.length < 4) {
    const parIndex = Math.floor(Math.random() * 4);
    if (arrayNumbers.indexOf(parIndex) === -1) {
      arrayNumbers.push(parIndex);
    }

    // CICLI FOR PER RANDOMIZZARE LE RISPOSTE DENTRO LE CASELLE
    for (let i = 0; i < questions[randomIndex].answer.length; i++) {
      for (let j = 0; j < arrayNumbers.length; j++) {
        for (k = 0; k < par.length; k++) {
          if (i === arrayNumbers[j] && j === k) {
            par[k].innerText = questions[randomIndex].answer[i];
          }
        }
      }
    }
  }

  // IF STATEMENT PER NASCONDERE LE ULTIME DUE CASELLE IN CASO DI TRUE/FALSE
  if (questions[randomIndex].type === "boolean") {
    par[0].innerText = "True";
    par[1].innerText = "False";
    div[2].style.visibility = "hidden";
    div[3].style.visibility = "hidden";
  }

  const correctAnswer = questions[randomIndex].correct_answer;
  myAnswer = correctAnswer;
  console.log("La risposta giusta è: ", correctAnswer);

  // AGGIUNGIAMO FUNZIONE PER IL CLICK AD OGNI PARAGRAFO
  // par.forEach((el) => {
  //   el.addEventListener("click", (e) => {
  //     // console.log(e.target.innerText);
  //     // console.log(randomIndex);
  //     // console.log(questions[randomIndex].correct_answer);

  //     if (e.target.innerText === correctAnswer) {
  //       console.log("Trovato");
  //       score++;
  //     }
  //     console.log(e.target.innerText, "Eccolo");
  //     console.log("ciao");
  //   });
  // });

  questionCounter++;
  counter.innerHTML = `QUESTION ${questionCounter}<span id=change>/10</span>`;
  document.getElementById("change").style.color = "rgb(178,0,136)";

  questions.splice(randomIndex, 1);

  console.log("Questo è il tuo punteggio: ", score);
  // console.log(randomIndex);
  // console.log(par);
  // console.log(questions);
  // console.log(arrayNumbers);
  console.log("Question counter: ", questionCounter);
};

div.forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (e.target.innerText === myAnswer) {
      score++;
      newQuestion();
      timerCounter = 30;
      console.log("Punteggio finale: ", score);
      // if (questionCounter === 10 && e.target.innerText === myAnswer) {
      //   score++;
      //   localStorage.setItem("savedScore", score);
      //   document.location.href = "../results.html";
      // }
    } else if (score === 9 && target === myAnswer) {
      console.log("Santo dio");
      console.log(target);
      score++;
      localStorage.setItem("savedScore", score);
      document.location.href = "../results.html";
    } else if (questionCounter === 10) {
      console.log("Santo dio2");
      localStorage.setItem("savedScore", score);
      localStorage.setItem("savedScore", "Ciao a tutti");
      document.location.href = "../results.html";
    } else {
      newQuestion();
      timerCounter = 30;
      // if (questionCounter === 10) {
      //   localStorage.setItem("savedScore", score);
      //   document.location.href = "../results.html";
      // }
    }
    // console.log(e.target, "ciao");
  });
});
// button.addEventListener("click", newQuestion);

// div.forEach((el) => {
//   el.addEventListener("mouseover", () => {
//     el.style.backgroundColor = "rgb(189, 1, 140)";
//   });
// });

startTest();
