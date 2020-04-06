import fru from './data.js';

const contaner = document.getElementById('contaner');

fru.forEach(element => {
    
    const fruit = element.name;
    const fruitDiv = document.createElement('div');
    fruitDiv.textContent = fruit;
    contaner.appendChild(fruitDiv); 

});
