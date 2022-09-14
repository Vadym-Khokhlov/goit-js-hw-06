const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("ul#ingredients");
const ingredientsAdd = [...ingredients].map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
  // ingredientsListRef.append(item);
});
ingredientsListRef.append(...ingredientsAdd);
