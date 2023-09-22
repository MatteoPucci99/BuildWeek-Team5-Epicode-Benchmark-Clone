const numberInputs = Array.from(document.getElementsByClassName("numbers"));
const modeInputs = Array.from(document.getElementsByClassName("mode"));

const easyMode = modeInputs[0];
const mediumMode = modeInputs[1];
const hardMode = modeInputs[2];

let mode = "";
const selectMode = (e) => {
  mode = e.target.value;
  localStorage.setItem("mode", mode);
  console.log(mode);
};
easyMode.addEventListener("click", selectMode);
mediumMode.addEventListener("click", selectMode);
hardMode.addEventListener("click", selectMode);

let numberOfQuests = 0;
const selectNumberOfQuests = (e) => {
  numberOfQuests = e.target.value;
  console.log(typeof numberOfQuests);
  localStorage.setItem("numberOfQuests", numberOfQuests);
};

for (let i = 0; i < numberInputs.length; i++) {
  numberInputs[i].addEventListener("click", selectNumberOfQuests);
}

// RESET DEL FORM
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// FUNZIONE PROCEED BUTTON
const loadingAndGo = () => {
  document.location.href = "../benchMarkPage/benchmark.html";
};

const container = document.getElementsByClassName("container")[0];
const spinner = document.getElementsByClassName("spinner")[0];

// Se vuoi lo spinner decommenta fino a seTimeout e commenta loadingAndGo
const button = document.getElementById("start-button");
button.addEventListener("click", () => {
  // container.classList.add("elements-hidden");
  // spinner.style.visibility = "visible";
  // setTimeout(loadingAndGo, 2000);
  loadingAndGo();
});
