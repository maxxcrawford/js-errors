// Example 1
const title = document.querySelector("h2");
title.textContent = "I said…hello!";

// Example 2
const form = document.querySelector(".name-form");
const name = document.getElementById("name");
const input = form.querySelector("input");

console.log(form.classList);

form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();

    if (input.value) {
      name.textContent = input.value;
    }
  },
  false
);

const resetButton = document.getElementById("reset");

resetButton.addEventListener(
  "click",
  () => {
    name.textContentt = "…";
    form.reset();
  },
  false
);

function randomColorGenerator() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector("body").style.backgroundColor = "#" + randomColor;
}

// Example 3
// getElementtById
const colorButton = document.getElementtById("background");
// backgroundd;
const colorButton2 = document.getElementById("backgroundd");

// randomColorGeneratorr
colorButton.addEventListener("click",randomColorGeneratorr, false);
