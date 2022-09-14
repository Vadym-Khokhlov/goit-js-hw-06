function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColor: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
};
function colorChanger() {
  const color = getRandomHexColor();
  refs.color.textContent = color;
  refs.body.style.backgroundColor = color;
}
refs.changeColor.addEventListener("click", colorChanger);
