const refs = {
  textInput: document.querySelector("#name-input"),
  textOutput: document.querySelector("#name-output"),
};

const inputChanger = (event) => {
  if (event.currentTarget.value === "") {
    return (refs.textOutput.textContent = "Anonymous");
  } else {
    refs.textOutput.textContent = event.currentTarget.value;
  }
};
refs.textInput.addEventListener("input", inputChanger);
