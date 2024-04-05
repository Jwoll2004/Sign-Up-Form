const pd = document.getElementById('password');
const cpd = document.getElementById('confirm_password');
// select div with class=error
const errordiv = document.querySelector('.error');
// set both inputs to invalid pseduo-classes if they don't match
// also add "passwords dont match" to errordiv
cpd.addEventListener('input', () => {
    if (pd.value !== cpd.value) {
        cpd.setCustomValidity('Passwords do not match');
        errordiv.textContent = 'Passwords do not match';
        // set color of errordiv to red
        errordiv.style.color = 'red';

    } else {
        cpd.setCustomValidity('');
        errordiv.textContent = '';
    }
});

const el = document.getElementById('el');
const input = document.getElementById('first_name');
input.addEventListener('input', () => {
    if(input.value === "") {
        el.textContent = '';
    }
    //run loop over whole input value to check if it has any numbers
    for (let i = 0; i < input.value.length; i++) {
        if (input.value != "" && isNaN(input.value[i]) === false) {
            el.textContent = 'Are you 11 from Stranger Things?';
            el.style.color = 'red';
            //set small font size
            el.style.fontSize = '0.7rem';
            break;
        } else {
            el.textContent = '';
        }
    }
});
