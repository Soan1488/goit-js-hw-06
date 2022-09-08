let counterValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value')

increment.addEventListener('click', toIncrement);
decrement.addEventListener('click', toDecrement);

function toIncrement () {
    counterValue += 1;
    value.textContent = counterValue;
}

function toDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}