const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card'); // find the closest card class (happens to be the parent)

    console.log(card);
    // grab image src
    const imgSrc = card.querySelector('img').src;

    const { description } = card.dataset;
    const name = card.querySelector('h2').textContent;
    console.log(description);

    // populate the modal with the new info
    modalInner.innerHTML = `
    <img height="600" width="600" src="${imgSrc.replace(
        '200',
        '600'
    )}" alt="${name}"/>
    <p>${description}</p>
    `;

    // show the modal
    modalOuter.classList.add('open');
}

function closeModal() {
    modalOuter.classList.remove('open');
}
cardButtons.forEach((button) =>
    button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', function (event) {
    const isOutside = !event.target.closest('.modal-inner');

    console.log(isOutside);
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
