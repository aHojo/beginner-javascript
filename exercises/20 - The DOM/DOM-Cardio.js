// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.append(div);

// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.textContent = 'one';
li2.textContent = 'two';
li3.textContent = 'three';
ul.append(li1, li2, li3);

div.append(ul);

// create an image
const img = document.createElement('img');
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
img.src = 'https://source.unsplash.com/random/300x300';
img.width = 200;
img.classList.add('cute');
img.alt = 'Cute Puppy';
div.append(img);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlString = `
  <div>
    <p>I am a p</p>
    <p>i am p2</p>
  </div>
`;
div.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
