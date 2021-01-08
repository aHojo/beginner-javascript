const wes = document.querySelector('.wes');

wes.addEventListener('click', function (e) {
    e.preventDefault();

    // don't let the link with class wes redirect
    console.log('you clicked it!');
    const shouldChangePage = window.confirm(
        'This website might be malicious do you wish to proceed?'
    );
    console.log(shouldChangePage);
    if (shouldChangePage) {
        window.location = e.target.href;
    }
});

const signupForm = document.querySelector('[name="signup"');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const name = e.currentTarget.name.value;
    console.log(e.currentTarget.name.value);
    console.log(e.currentTarget.email);
    console.log(e.currentTarget.email.value);
    console.log(e.currentTarget.agree);
    console.log(e.currentTarget.agree.checked);

    if (name.includes('chad')) {
        alert('Sorry Bro');
    }
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget);
}

signupForm.addEventListener('keyup', logEvent);
