const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if (!terms) {
        return;
    }
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // stop the observing
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});
ob.observe(terms.lastElementChild); // this will be the p tag
