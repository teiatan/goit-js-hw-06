const inputEl = document.querySelector(`#name-input`);
const outputEl = document.querySelector(`#name-output`);
inputEl.addEventListener(`input`, inputNameHandler);

function inputNameHandler(event) {
    event.currentTarget.value === "" ? outputEl.textContent = "Anonymous" : outputEl.textContent = event.currentTarget.value;
}

