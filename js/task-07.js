const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, fontSizeControlHandler);

function fontSizeControlHandler(event) {
    textEl.setAttribute(`style`, `font-size: ${event.currentTarget.value}px`);
};
