const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();

    const {
        elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        window.alert ('ALL FIELDS MUST BE FILLED')
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        }
        console.log(formData)
        
        
    }  
    event.currentTarget.reset();
}


