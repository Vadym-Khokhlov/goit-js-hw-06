const counter = {
  counterValue: 0,
  increment() {
    console.log("increment -> this", this);
    this.counterValue += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.counterValue -= 1;
  },
};

const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("value");

incrBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);
  value.textContent = counter.counterValue;
});

decrBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);
  value.textContent = counter.counterValue;
});
