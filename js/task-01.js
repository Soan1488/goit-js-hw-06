const categoriesList = document.querySelector('#categories');
console.log('Number of categories:', categoriesList.children.length);
console.log('Category:', categoriesList.firstElementChild.firstElementChild.textContent);
console.log('Elements:', categoriesList.firstElementChild.firstElementChild.nextElementSibling.children.length);
console.log('Category:', categoriesList.firstElementChild.nextElementSibling.firstElementChild.textContent);
console.log('Elements:', categoriesList.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.children.length);
console.log('Category:', categoriesList.lastElementChild.firstElementChild.textContent);
console.log('Elements:', categoriesList.lastElementChild.firstElementChild.nextElementSibling.children.length);
