const inputRef = document.querySelector("#validation-input");
const inputRefLength = inputRef.getAttribute("data-length");
const inputLengthChecker = (event) => {
  const isValid = event.currentTarget.value.length === Number(inputRefLength);
  if (isValid) {
    classChanger("valid", "invalid");
  } else classChanger("invalid", "valid");
};

inputRef.addEventListener("blur", inputLengthChecker);

function classChanger(newClass, oldClass) {
  inputRef.classList.add(newClass);
  inputRef.classList.remove(oldClass);
}
