const ulCategoriesEl = document.querySelector(`#categories`);
const allLiInCategoriesEl = ulCategoriesEl.querySelectorAll(`li.item`);
console.log(`Number of categories: ${allLiInCategoriesEl.length}`);


for (let category of allLiInCategoriesEl) {
    console.log(`Category: ${category.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${category.querySelectorAll(`li`).length}`);
}
