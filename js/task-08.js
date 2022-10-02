const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, formSubmitHandler);

function formSubmitHandler(event) {
event.preventDefault();
const formElements = event.currentTarget.elements;
const mailEl = formElements.email.value;
const passwordEl = formElements.password.value;

 if (formElements.email.value === "" || formElements.password.value === "") {
    alert("All form fields must be completed");
 } else {
    const formData = {
        mailEl,
        passwordEl,
    };
    formEl.reset();
    console.log(formData);
 };
}


