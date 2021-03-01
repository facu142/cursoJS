
const $form = document.querySelector('#form');
const $button = document.querySelector('#submitButton');

const $name = document.querySelector('#name');
const $email = document.querySelector('#email');
const $gender = document.querySelector('#gender');
const $terms = document.querySelector('#terms');

const formIsValid = {
    $name: false,
    $email: false,
    $gender: false,
    $terms: false
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})

$name.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) {
        formIsValid.$name = true;
    }
})
$email.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) {
        formIsValid.$email = true;
    }
})
$gender.addEventListener('change', (e) => {
    if (e.target.checked) {
        formIsValid.$gender = true;
    }
})
$terms.addEventListener('change', (e) => {
    formIsValid.$terms = e.checked;
    e.target.checked ? $button.removeAttribute('disabled') :
        $button.setAttribute('disabled', true);
})

const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false)
    if(valid === -1) $form.submit();
    else alert('Form invalid');
}