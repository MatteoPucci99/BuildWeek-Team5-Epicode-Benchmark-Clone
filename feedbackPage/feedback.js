const ratingStars = Array.from(document.getElementsByClassName("fa-solid"));
console.log(ratingStars);

let finalRating = 0;

const selectRatingStar = (e) => {
  for (let i = 0; i < ratingStars.length; i++) {
    ratingStars[i].classList.remove("lit");
  }

  const starID = e.target.getAttribute("id");
  for (let i = 0; i < starID; i++) {
    ratingStars[i].classList.add("lit");
  }
  finalRating = starID;
  console.log(finalRating);
};

const starsClickable = (stars) => {
  stars.forEach((star) => star.addEventListener("click", selectRatingStar));
};

starsClickable(ratingStars);

const form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
const link = () => {
  window.location.href = "https://epicode.com/it/";
};

const button = document.getElementById("btnRate");

button.addEventListener("click", link);
