const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkBoxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTittle = document.querySelector('.loginTittle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');

btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passwordInput.focus(), 500);
    loginTittle.innerHTML = 'login'
    userEmail.innerHTML = emailInput.value;
};
btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTittle.innerHTML = 'Welcome';
    userEmail.innerHTML = 'Please login to use the platform';
    emailInput.focus();
};
checkBoxPass.onclick = ()=> {
    if(checkBoxPass.checked) 
    {
        passwordInput.type = 'text'
    }
    else {
        passwordInput.type = 'password';
    }
};