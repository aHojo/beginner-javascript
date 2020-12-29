const p = document.querySelector('p');
const imgs = document.querySelectorAll('div.item img');
console.log(p);
console.log(imgs);

// Grab a child image after grabbing the element with a class of item2.
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');

console.log(item2, item2Image);

// const heading = document.querySelector('h2');
// // console.dir(heading); // shows us the object properties
// console.log(heading.textContent); // getter
// heading.textContent = ':Hojo is cool'; // setter
// console.log(heading.textContent); // this gets content of all elements, including script and style
// console.log(heading.innerText); // this is the older, and only gets human readable elemets

const pizzaList = document.querySelector('p.pizzas');
pizzaList.insertAdjacentText('beforeend', '🍕');
pizzaList.insertAdjacentText('afterbegin', '🍕');
