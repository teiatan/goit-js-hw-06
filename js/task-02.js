const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector(`#ingredients`);
const ingredientsListEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement(`li`);
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add(`item`);

  return ingredientEl;
})

console.log(ingredientsListEl);
ingredientsContainerEl.append(...ingredientsListEl);