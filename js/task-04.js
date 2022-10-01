const descrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const counterEl = document.querySelector(`#value`);
let counterValue = 0;


descrementBtn.addEventListener(`click`, descrementButtonClickHandler);
incrementBtn.addEventListener(`click`, incrementButtonClickHandler);

function descrementButtonClickHandler() {
    counterValue -= 1;
    counterEl.innerHTML = counterValue;
}
function incrementButtonClickHandler() {
    counterValue += 1;
    counterEl.innerHTML = counterValue;;
}
