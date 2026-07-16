const formContainer = document.getElementById('form-container');
const successMessage = document.getElementById('success-message');

const dismissBtn = document.getElementById('dismiss-button');

const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email');
const emailPlaceholder = document.getElementById('email-placeholder');

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

formContainer.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if(!emailValue || !isValidEmail(emailValue)) {
        errorMessage.classList.remove('hidden');
        emailInput.classList.add('error-input');
        return;
    }

    errorMessage.classList.add('hidden');
    emailInput.classList.remove('error-input');

    emailPlaceholder.textContent = emailInput.value;

    formContainer.classList.add('hidden');
    successMessage.classList.remove('hidden');
})

emailInput.addEventListener("input", () => {
    errorMessage.classList.add("hidden");
    emailInput.classList.remove("error-input");
});

dismissBtn.addEventListener('click', () => {
    emailInput.value = '';
    formContainer.classList.remove('hidden');
    successMessage.classList.add('hidden');
})


