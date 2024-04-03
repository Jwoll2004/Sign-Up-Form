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