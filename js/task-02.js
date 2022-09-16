const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = [];

ingredients.forEach(ingredient => createIngredient(ingredient));

 function createIngredient(ingredient) {
   const createItem = document.createElement('li');
   createItem.textContent = ingredient;
   createItem.classList.add('item');
   items.push(createItem);
 }
 
document.querySelector('#ingredients').append(...items);
