const butts = document.querySelector('.butts');

const handleClick = function (e) {
    e.preventDefault();
    console.log('clicked');
};
butts.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyBtn = document.querySelectorAll('button.buy');

// const handleBuyButtonClick = (btn) => {
//   btn.addEventListener('click', buyItem);
// };
// const buyItem = function () {
//   console.log('Buying Item!!!!', this);
// };

// buyBtn.forEach(handleBuyButtonClick);

function handleBuyButtonClick(event) {
    // stop this even from bubbling up
    event.stopPropagation();
    const button = event.target;
    console.log(button.textContent);
    console.log('You are buying it!');
    console.log(parseFloat(event.target.dataset.price));
    console.log(parseFloat(this.dataset.price));
}

buyBtn.forEach(function (btn) {
    btn.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
    'click',
    function (e) {
        console.log('Clicked on Window');
        console.log(e.target);
    }
    // { capture: true }
);

const photo = document.querySelector('.photo');
photo.addEventListener('mouseenter', function (e) {
    console.log(e.currentTarget);
    console.log(this);
});
