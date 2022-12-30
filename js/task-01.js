/* variant 1

const ulCategoriesEl = document.querySelector(`#categories`);
const allLiInCategoriesEl = ulCategoriesEl.querySelectorAll(`li.item`);
console.log(`Number of categories: ${allLiInCategoriesEl.length}`);


for (let category of allLiInCategoriesEl) {
    console.log(`Category: ${category.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${category.querySelectorAll(`li`).length}`);
}
 
 */

/* variant 2

const ulCategoriesEl = document.querySelector(`#categories`);

console.log(`
    Number of categories: ${ulCategoriesEl.children.length}

    Category: ${ulCategoriesEl.firstElementChild.firstElementChild.textContent}
    Elements: ${ulCategoriesEl.firstElementChild.lastElementChild.children.length}

    Category: ${ulCategoriesEl.firstElementChild.nextElementSibling.firstElementChild.textContent}
    Elements: ${ulCategoriesEl.firstElementChild.nextElementSibling.lastElementChild.children.length}

    Category: ${ulCategoriesEl.lastElementChild.firstElementChild.textContent}
    Elements: ${ulCategoriesEl.lastElementChild.lastElementChild.children.length}
`); */

/* variant 3 */

const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);
console.log('');
categories.forEach((category) => {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
    console.log('');
})
