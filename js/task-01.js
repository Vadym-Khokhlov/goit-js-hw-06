const categoryListRef = document.querySelectorAll(".item");
console.log("Number of categories:", categoryListRef.length);

const category = [...categoryListRef].map((category) => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryElementQuantity = category.lastElementChild.children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementQuantity}`);
});

// const infoCategory = function (categoryRef) {
//   categoryRef.forEach((category) => {
//     const categoryTitle = category.querySelector("h2");

//     const categoryList = category.querySelectorAll("li");
//     console.log(
//       `Category: ${categoryTitle.textContent} Elements: ${categoryList.length}`
//     );
//   });
// };
// infoCategory(categoryRef);
