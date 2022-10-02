function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
const colorSpanEl = document.querySelector(`.color`);

buttonEl.addEventListener(`click`, backgroundColorChangeHandler);

function backgroundColorChangeHandler(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = bodyEl.style.backgroundColor;
};
