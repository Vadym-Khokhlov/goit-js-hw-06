function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColor: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
};
function colorChanger() {
  refs.color.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}
refs.changeColor.addEventListener("click", colorChanger);
