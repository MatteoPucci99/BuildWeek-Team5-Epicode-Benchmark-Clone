const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const checkbox = document.getElementsByClassName("checkbox")[0];
const proceed = document.getElementById("button");
checkbox.addEventListener("click", function () {
  if (proceed.getAttribute("onclick") === null) {
    proceed.setAttribute(
      "onclick",
      "document.location.href = '../set-question/set-question.html'"
    );
  } else if (proceed.getAttribute("onclick")) {
    proceed.removeAttribute("onclick");
  }
});

checkbox.addEventListener("click", () => {
  if (checkbox.classList.contains("clicked")) {
    checkbox.classList.remove("clicked");
  } else if (!checkbox.classList.contains("clicked")) {
    checkbox.classList.add("clicked");
  }
});
