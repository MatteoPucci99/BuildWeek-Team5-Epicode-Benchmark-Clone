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
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
    answer: ["1GB", "512MB", "5GB", "Unlimited"],
  },
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
    question: "What does RAM stand for?",
    correct_answer: "Random Access Memory",
    incorrect_answers: [
      "Randomly Accessed Memory",
      "Readily Accessed Memory",
      "Read Access Memory",
    ],
    answer: [
      "Random Access Memory",
      "Randomly Accessed Memory",
      "Readily Accessed Memory",
      "Read Access Memory",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the file extension for JavaScript files?",
    correct_answer: ".js",
    incorrect_answers: [".j", ".script", ".javascript"],
    answer: [".js", ".j", ".script", ".javascript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which company developed the Python programming language?",
    correct_answer: "Python Software Foundation",
    incorrect_answers: ["Microsoft", "Google", "Facebook"],
    answer: ["Python Software Foundation", "Microsoft", "Google", "Facebook"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most widely used programming language for web development?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Python", "Java", "Ruby"],
    answer: ["JavaScript", "Python", "Java", "Ruby"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does HTML stand for?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answers: [
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
      "Hypertext Tool Markup Language",
    ],
    answer: [
      "Hypertext Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
      "Hypertext Tool Markup Language",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CSS stand for?",
    correct_answer: "Cascading Style Sheets",
    incorrect_answers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language is known as the 'mother of all languages'?",
    correct_answer: "C",
    incorrect_answers: ["Java", "Python", "Fortran"],
    answer: ["C", "Java", "Python", "Fortran"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does GUI stand for?",
    correct_answer: "Graphical User Interface",
    incorrect_answers: [
      "General User Interface",
      "Graphical Utility Interface",
      "Global User Interaction",
    ],
    answer: [
      "Graphical User Interface",
      "General User Interface",
      "Graphical Utility Interface",
      "Global User Interaction",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "In computing, what does the acronym 'SQL' stand for?",
    correct_answer: "Structured Query Language",
    incorrect_answers: [
      "Structured Query List",
      "Structured Query Leverage",
      "Standard Query Language",
    ],
    answer: [
      "Structured Query Language",
      "Structured Query List",
      "Structured Query Leverage",
      "Standard Query Language",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the primary purpose of an operating system?",
    correct_answer: "To manage computer hardware",
    incorrect_answers: [
      "To provide a user-friendly interface",
      "To run computer programs",
      "To protect against viruses",
    ],
    answer: [
      "To manage computer hardware",
      "To provide a user-friendly interface",
      "To run computer programs",
      "To protect against viruses",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the maximum number of IP addresses that IPv6 supports?",
    correct_answer: "340 undecillion (10^36)",
    incorrect_answers: ["4.3 billion (2^32)", "128 trillion (10^14)", "2^64"],
    answer: [
      "340 undecillion (10^36)",
      "4.3 billion (2^32)",
      "128 trillion (10^14)",
      "2^64",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the name of the first computer virus?",
    correct_answer: "Creeper",
    incorrect_answers: ["ILOVEYOU", "Mydoom", "Code Red"],
    answer: ["Creeper", "ILOVEYOU", "Mydoom", "Code Red"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language is often used for artificial intelligence (AI) and machine learning (ML) applications?",
    correct_answer: "Python",
    incorrect_answers: ["Java", "C++", "Ruby"],
    answer: ["Python", "Java", "C++", "Ruby"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the term for a single binary digit in computing?",
    correct_answer: "Bit",
    incorrect_answers: ["Byte", "Nibble", "Octet"],
    answer: ["Bit", "Byte", "Nibble", "Octet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the first computer bug?",
    correct_answer: "Moth",
    incorrect_answers: ["Roach", "Beetle", "Ant"],
    answer: ["Moth", "Roach", "Beetle", "Ant"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "In computer science, what does the acronym 'DNS' stand for?",
    correct_answer: "Domain Name System",
    incorrect_answers: [
      "Dynamic Network Services",
      "Digital Network System",
      "Domain Network Server",
    ],
    answer: [
      "Domain Name System",
      "Dynamic Network Services",
      "Digital Network System",
      "Domain Network Server",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which encryption algorithm is widely used for securing internet communications?",
    correct_answer: "AES (Advanced Encryption Standard)",
    incorrect_answers: ["RSA", "DES", "Blowfish"],
    answer: ["AES (Advanced Encryption Standard)", "RSA", "DES", "Blowfish"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the theoretical concept for a continuously operating supercomputer without maintenance?",
    correct_answer: "The Oracle",
    incorrect_answers: ["Einstein", "The Messiah", "The Immortal"],
    answer: ["The Oracle", "Einstein", "The Messiah", "The Immortal"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does HTTP stand for?",
    correct_answer: "Hypertext Transfer Protocol",
    incorrect_answers: [
      "Hypertext Transport Protocol",
      "Hypertext Technical Protocol",
      "Hypertext Terminal Protocol",
    ],
    answer: [
      "Hypertext Transfer Protocol",
      "Hypertext Transport Protocol",
      "Hypertext Technical Protocol",
      "Hypertext Terminal Protocol",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language is known for its use in data analysis and statistics?",
    correct_answer: "R",
    incorrect_answers: ["Python", "Java", "C++"],
    answer: ["R", "Python", "Java", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the term for a high-speed storage area used to store frequently accessed computer data?",
    correct_answer: "Cache",
    incorrect_answers: ["RAM", "ROM", "CPU"],
    answer: ["Cache", "RAM", "ROM", "CPU"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language was developed by Microsoft and is commonly used for developing Windows applications?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "Python", "Ruby"],
    answer: ["C#", "Java", "Python", "Ruby"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: [
      "Graphics Program Unit",
      "General Purpose Unit",
      "Graphics Peripheral Unit",
    ],
    answer: [
      "Graphics Processing Unit",
      "Graphics Program Unit",
      "General Purpose Unit",
      "Graphics Peripheral Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In web development, what does CSS stand for?",
    correct_answer: "Cascading Style Sheets",
    incorrect_answers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the default programming language for Android app development?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Kotlin", "Swift"],
    answer: ["Java", "Python", "Kotlin", "Swift"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the 'MP' stand for in MP3?",
    correct_answer: "MPEG-1 Audio Layer 3",
    incorrect_answers: ["Music Player", "Multi-Purpose", "Micro Point"],
    answer: [
      "MPEG-1 Audio Layer 3",
      "Music Player",
      "Multi-Purpose",
      "Micro Point",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which company developed the Java programming language?",
    correct_answer: "Sun Microsystems",
    incorrect_answers: ["Microsoft", "Oracle", "IBM"],
    answer: ["Sun Microsystems", "Microsoft", "Oracle", "IBM"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the programming language created by Guido van Rossum, known for its readability and ease of use?",
    correct_answer: "Python",
    incorrect_answers: ["Java", "C++", "Ruby"],
    answer: ["Python", "Java", "C++", "Ruby"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the main function of an operating system?",
    correct_answer: "Managing hardware and software resources",
    incorrect_answers: [
      "Providing a user-friendly interface",
      "Running computer programs",
      "Protecting against viruses",
    ],
    answer: [
      "Managing hardware and software resources",
      "Providing a user-friendly interface",
      "Running computer programs",
      "Protecting against viruses",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which data structure uses a Last-In-First-Out (LIFO) order?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Linked List", "Array"],
    answer: ["Stack", "Queue", "Linked List", "Array"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does HTML stand for?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answers: [
      "Hyperlink Text Markup Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language",
    ],
    answer: [
      "Hypertext Markup Language",
      "Hyperlink Text Markup Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which computer scientist is often referred to as the 'Father of the Internet'?",
    correct_answer: "Vint Cerf",
    incorrect_answers: ["Tim Berners-Lee", "Linus Torvalds", "Alan Turing"],
    answer: ["Vint Cerf", "Tim Berners-Lee", "Linus Torvalds", "Alan Turing"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the term for a piece of code that can replicate itself, infect a computer, and spread to other computers or systems?",
    correct_answer: "Computer Virus",
    incorrect_answers: ["Malware", "Worm", "Trojan Horse"],
    answer: ["Computer Virus", "Malware", "Worm", "Trojan Horse"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In web development, what does CSS3 bring to the table in comparison to its predecessor CSS2?",
    correct_answer: "New properties and animations",
    incorrect_answers: [
      "Improved performance",
      "Smaller file sizes",
      "Better browser support",
    ],
    answer: [
      "New properties and animations",
      "Improved performance",
      "Smaller file sizes",
      "Better browser support",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language is commonly used for developing mobile apps for iOS?",
    correct_answer: "Swift",
    incorrect_answers: ["Java", "C#", "Kotlin"],
    answer: ["Swift", "Java", "C#", "Kotlin"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the term for a software program that emulates a hardware device or system?",
    correct_answer: "Emulator",
    incorrect_answers: ["Simulator", "Mimic", "Replicator"],
    answer: ["Emulator", "Simulator", "Mimic", "Replicator"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym 'URL' stand for?",
    correct_answer: "Uniform Resource Locator",
    incorrect_answers: [
      "Universal Reference Link",
      "Unified Resource Locator",
      "Uniform Reference Link",
    ],
    answer: [
      "Uniform Resource Locator",
      "Universal Reference Link",
      "Unified Resource Locator",
      "Uniform Reference Link",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language is commonly used for data analysis and scientific computing?",
    correct_answer: "Python",
    incorrect_answers: ["Java", "C++", "R"],
    answer: ["Python", "Java", "C++", "R"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the smallest unit of data in a computer?",
    correct_answer: "Bit",
    incorrect_answers: ["Byte", "Nibble", "Megabyte"],
    answer: ["Bit", "Byte", "Nibble", "Megabyte"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language was developed by Bjarne Stroustrup at Bell Labs in the early 1980s?",
    correct_answer: "C++",
    incorrect_answers: ["Java", "Python", "Ruby"],
    answer: ["C++", "Java", "Python", "Ruby"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the maximum number of characters that can be stored in a single Unicode character?",
    correct_answer: "1",
    incorrect_answers: ["8", "16", "32"],
    answer: ["1", "8", "16", "32"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language is often used for developing system software and operating systems?",
    correct_answer: "C",
    incorrect_answers: ["Java", "Python", "C++"],
    answer: ["C", "Java", "Python", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the term for a software program that pretends to be a legitimate application to carry out malicious activities?",
    correct_answer: "Trojan Horse",
    incorrect_answers: ["Spyware", "Malware", "Virus"],
    answer: ["Trojan Horse", "Spyware", "Malware", "Virus"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the primary purpose of a compiler in programming?",
    correct_answer: "Translate high-level code to machine code",
    incorrect_answers: [
      "Debugging",
      "Optimizing code",
      "Creating user interfaces",
    ],
    answer: [
      "Translate high-level code to machine code",
      "Debugging",
      "Optimizing code",
      "Creating user interfaces",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which data structure uses a First-In-First-Out (FIFO) order?",
    correct_answer: "Queue",
    incorrect_answers: ["Stack", "Linked List", "Array"],
    answer: ["Queue", "Stack", "Linked List", "Array"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What does the acronym 'BIOS' stand for in the context of computing?",
    correct_answer: "Basic Input/Output System",
    incorrect_answers: [
      "Binary Input/Output System",
      "Basic Internal Operating System",
      "Built-In Operating System",
    ],
    answer: [
      "Basic Input/Output System",
      "Binary Input/Output System",
      "Basic Internal Operating System",
      "Built-In Operating System",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which encryption algorithm is considered more secure, AES-128 or AES-256?",
    correct_answer: "AES-256",
    incorrect_answers: ["AES-128", "AES-192", "AES-512"],
    answer: ["AES-256", "AES-128", "AES-192", "AES-512"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the theoretical concept for a computer that can solve any problem that a human being can, given enough time and resources?",
    correct_answer: "Universal Turing Machine",
    incorrect_answers: ["Quantum Computer", "Supercomputer", "Oracle Machine"],
    answer: [
      "Universal Turing Machine",
      "Quantum Computer",
      "Supercomputer",
      "Oracle Machine",
    ],
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
const numberOfQuests = parseInt(localStorage.getItem("numberOfQuests"));
const mode = localStorage.getItem("mode");
let timerCounter = 30;
const deleteOne = 1;
let newCount = 0;

// let timerCounter = 30;
// const deleteOne = 1;

// TIMER FUNCTION

const timer = () => {
  setInterval(() => {
    if (timerCounter === 0) {
      timerCounter = 30;
      newCount = 0;
      newQuestion();
    } else {
      timerCounter -= deleteOne;
      newCount++;
      progressValue.innerHTML = `<p class='count-down'>SECONDS</p>${timerCounter} <p class='count-down'>REMAINING</p>`;
      circularProgression.style.background = `conic-gradient( hsl(294.12deg 20.16% 50.39%) 
     ${newCount * 12}deg, hsl(180deg 100% 50%)  0deg)`;
      if (timerCounter === 0 && questionCounter === 10) {
        document.location.href = "../results.html";
      }
    }
  }, 1000);
};

timer();

console.log(typeof numberOfQuests);

// STARTING POINT
// const startTest = () => {
//   let questionCounter = 0;
//   let score = 0;
//   newQuestion();
// };

// NEW QUESTION FUNCTION
const newQuestion = () => {
  if (questionCounter === numberOfQuests) {
    return;
  }

  // reset dello style del div
  div.forEach((el) => {
    el.classList.remove("correct-answer");
    el.classList.remove("wrong-answer");
    el.classList.add("hover-effect");
  });

  // POI GLI TROVIAMO UN NOME
  const selectedQuestions = [];
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].difficulty === mode) {
      selectedQuestions.push(questions[i]);
    }
  }

  questions.splice(0);

  for (let i = 0; i < selectedQuestions.length; i++) {
    questions.push(selectedQuestions[i]);
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

    console.log(questions[randomIndex]);
    console.log(questions);
    console.log(randomIndex);
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

  // PORTO FUORI LE RISPOSTE GIUSTE PER SALVARLE A LIVELLO GLOBALE
  const correctAnswer = questions[randomIndex].correct_answer;
  myAnswer = correctAnswer;
  // SUGGERIMENTO 'PERSONALE' PER LA RISPOSTA CORRETTA PER FARE DELLE VERIFICHE
  console.log("La risposta giusta è: ", correctAnswer);

  questionCounter++;
  counter.innerHTML = `QUESTION ${questionCounter}<span id='change'>/${numberOfQuests}</span>`;
  document.getElementById("change").style.color = "rgb(178,0,136)";

  // TOLGO LA DOMANDA ATTUALE DAL ARRAY DI OGGETTI PER NON RIPETERE LE STESSE DOMANDE OGNI VOLTA
  questions.splice(randomIndex, 1);

  // COUNTER 'PERSONALE' PER TRACCIARE IN CONSOLE IL PUNTEGGIO E LE DOMANDE
  console.log("Questo è il tuo punteggio: ", score);
  console.log("Question counter: ", questionCounter);

  localStorage.setItem("savedScore", score);
  localStorage.setItem("savedQuestions", questionCounter);

  console.log("Questo è il tuo punteggio: ", score);

  console.log("Question counter: ", questionCounter);
};

// FUNZIONE PER OGNI CLICK CHE SI FERMA QUANDO questionCounter === 10
div.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (questionCounter === numberOfQuests) {
      return;
    }
    const target = e.target.innerText;
    if (e.target.innerText === myAnswer) {
      score++;
      console.log("Questo è :", e.target);
      e.target.parentElement.classList.add("correct-answer");
      e.target.parentElement.classList.remove("hover-effect");
      setTimeout(newQuestion, 1000);
      // newQuestion();
      timerCounter = 30;
      newCount = 0;
      console.log("Punteggio finale: ", score);
      // if (questionCounter === 10 && e.target.innerText === myAnswer) {
      //   localStorage.setItem("savedScore", score);
      //   document.location.href = "../resultsPage/results.html";
      // }
    } else {
      console.log("Questo è :", e.target);
      e.target.parentElement.classList.add("wrong-answer");
      e.target.parentElement.classList.remove("hover-effect");
      setTimeout(newQuestion, 1000);
      timerCounter = 30;
      newCount = 0;
      if (questionCounter === 10) {
        localStorage.setItem("savedScore", score);
        setTimeout(goToResult, 1000);
      } else {
        e.target.parentElement.classList.add("wrong-answer");
        e.target.parentElement.classList.remove("hover-effect");
        setTimeout(goToResult, 1000);
      }
    }
  });
});

newQuestion();
