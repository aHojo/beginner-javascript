const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/500x500';
myImage.alt = 'nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myImage);
console.log(myParagraph);
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'This is a header';
myDiv.insertAdjacentElement('afterbegin', heading);

const ul = document.createElement('ul');

for (let i = 1; i < 6; i += 1) {
  const li = document.createElement('li');
  li.textContent = `I am item ${i}`;
  ul.append(li);
}

console.log(ul);
document.body.append(ul);
