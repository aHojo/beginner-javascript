const hojo = document.querySelector('.hojo');
console.log(hojo.childNodes); // NodeList(3) [ #text, em, #text ]

console.log(hojo.children); // HTMLCollection { 0: em, length: 1 }
console.log(hojo.firstElementChild);
console.log(hojo.lastElementChild);
console.log(hojo.previousElementSibling);
console.log(hojo.nextElementSibling);
console.log(hojo.parentElement);
