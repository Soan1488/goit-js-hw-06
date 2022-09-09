const inputEl = document.querySelector('#validation-input');
const lengthEl = document.querySelector('input[data-length="6"]');


inputEl.addEventListener('blur', (event) => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }  
})