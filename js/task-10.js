function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    const element = `<div style=" width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color : ${getRandomHexColor()}"></div>`;
    arr.push(element);
  }
  boxesEl.insertAdjacentHTML('beforeend', arr.join(''))
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}


