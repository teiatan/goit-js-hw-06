/* const ulCategoriesEl = document.querySelector(`#categories`);
const allLiInCategoriesEl = ulCategoriesEl.querySelectorAll(`li.item`);
console.log(`Number of categories: ${allLiInCategoriesEl.length}`);


for (let category of allLiInCategoriesEl) {
    console.log(`Category: ${category.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${category.querySelectorAll(`li`).length}`);
}
 
 */

const ulCategoriesEl = document.querySelector(`#categories`);

console.log(`
    Number of categories: ${ulCategoriesEl.children.length}

    Category: ${ulCategoriesEl.firstElementChild.firstElementChild.textContent}
    Elements: ${ulCategoriesEl.firstElementChild.lastElementChild.children.length}

    Category: ${ulCategoriesEl.firstElementChild.nextElementSibling.firstElementChild.textContent}
    Elements: ${ulCategoriesEl.firstElementChild.nextElementSibling.lastElementChild.children.length}

    Category: ${ulCategoriesEl.lastElementChild.firstElementChild.textContent}
    Elements: ${ulCategoriesEl.lastElementChild.lastElementChild.children.length}
`);
