
let button = document.querySelector(".button");
let scale = ["1", "2", "3", "4"];
let body = document.querySelector("body");

function newScale() {
  let randIndex = Math.floor(Math.random() * scale.length);
  let randScale = scale[randIndex];
  button.style.border-radius = randScale;
}

button.addEventListener("click", newScale);