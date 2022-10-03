function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector(`input`),
  createBtn: document.querySelector(`button[data-create]`),
  destroyBtn: document.querySelector(`button[data-destroy]`),
  boxesContainer: document.querySelector(`#boxes`),
}
let amount = 0;

refs.inputEl.addEventListener(`input`, getAmountOfBoxes);
refs.createBtn.addEventListener(`click`, createBoxes);
refs.destroyBtn.addEventListener(`click`, destroyBoxes);

function getAmountOfBoxes(event) {
  amount = event.currentTarget.value;
};

function createBoxes(event) {
  const boxesEl = [];
for (let i = 0; i < amount; i += 1) {
  const boxEl = document.createElement(`div`);
  boxEl.setAttribute(`style`, `background-color:${getRandomHexColor()}; width:${30 + 10 * i}px; height:${30 + 10 * i}px;`);
  boxesEl.push(boxEl);
  refs.boxesContainer.append(...boxesEl);
 }
};

function destroyBoxes(event) {
  refs.boxesContainer.innerHTML = "";
  refs.inputEl.value = "";
};
