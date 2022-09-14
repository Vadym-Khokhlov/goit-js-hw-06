const inputFontSizeController = document.querySelector("#font-size-control");
const textController = document.querySelector("#text");

textController.style.fontSize = inputFontSizeController.value + "px";

function fontSizeChanger(event) {
  textController.style.fontSize = `${event.currentTarget.value}px`;
}

inputFontSizeController.addEventListener("input", fontSizeChanger);
