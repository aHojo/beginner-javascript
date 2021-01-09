// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('div.item img');
// console.log(p);
// console.log(imgs);

// // Grab a child image after grabbing the element with a class of item2.
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');

// console.log(item2, item2Image);

// // const heading = document.querySelector('h2');
// // // console.dir(heading); // shows us the object properties
// // console.log(heading.textContent); // getter
// // heading.textContent = ':Hojo is cool'; // setter
// // console.log(heading.textContent); // this gets content of all elements, including script and style
// // console.log(heading.innerText); // this is the older, and only gets human readable elemets

// const pizzaList = document.querySelector('p.pizzas');
// pizzaList.insertAdjacentText('beforeend', '🍕');
// pizzaList.insertAdjacentText('afterbegin', '🍕');

/* CLASSES */
const pic = document.querySelector('.nice');

console.log(pic.classList);
// pic.classList.add('round');
pic.classList.remove('nice2');

const toggleRound = function () {
  pic.classList.toggle('round');
};
pic.addEventListener('click', toggleRound);
pic.alt = 'Cute Pup';

pic.getAttribute('alt');
console.log(pic);

pic.setAttribute('alt', 'REEALLYY CUTE PUPPY');
console.log(pic);

/* 
<img class="nice cool" src="https://source.unsplash.com/random/600x600" alt="Cute Pup">

<img class="nice cool" src="https://source.unsplash.com/random/600x600" alt="REEALLYY CUTE PUPPY">
*/

const custom = document.querySelector('.custom');

console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name}`);
});
