const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, formSubmitHandler);

function formSubmitHandler(event) {
event.preventDefault();
const formElements = event.currentTarget.elements;
const mailEl = formElements.email.value;
const passwordEl = formElements.password.value;
const formData = {
    mailEl,
    passwordEl,
}


console.log(formData);

}


