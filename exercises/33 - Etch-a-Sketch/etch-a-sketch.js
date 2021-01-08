// Select the elements on the page -
// canvas
// shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');

// set up our canvas for dawing
const { width, height } = canvas;

// create randome x and y starting points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const MOVE_AMOUNT = 10;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // Start a drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
    // Increment the hue;
    hue += 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move x and y depending on the user
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            return;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}
// Handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
}
// clear or shake function
function clear() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend',
        () => {
            canvas.classList.remove('shake');
        },
        { once: true }
    );
}

// listen for arrow keys.
window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clear);
