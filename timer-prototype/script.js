let number = document.getElementsByTagName("h2")[0];
let counter = 60;
setInterval(() => {
  if (counter === 0) {
    clearInterval();
    // number.innerText = "TEMPO SCADUTO";
  } else {
    counter -= 1;
    number.innerText = counter;
  }
}, 1000);
