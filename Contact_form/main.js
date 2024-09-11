// initialize
const loginForm=document.getElementById('loginForm');
const registerForm=document.getElementById('registerForm');
const contactForm=document.getElementById('contactForm');


const loginBtn=document.getElementById('loginBtn');
const registerBtn=document.getElementById('registerBtn');

const contactBtn=document.getElementById('contactBtn');

// Function to switch the forms
function showForm(FormShow)
{
    loginForm.classList.remove('active');
registerForm.classList.remove('active');
contactForm.classList.remove('active');
FormShow.classList.add('active');
}

loginBtn.addEventListener('click', () => showForm(loginForm));
registerBtn.addEventListener('click', () => showForm(registerForm));
contactBtn.addEventListener('click', () => showForm(contactForm));