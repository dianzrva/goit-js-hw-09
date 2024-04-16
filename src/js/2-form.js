const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let storageData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function reloadPage() {
  if (storageData) {
    email.value = storageData.email || '';
    message.value = storageData.message || '';
  }
}
form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSumbit);

function onFormInput(event) {
  
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const message = formElements.message.value.trim();
  const formData = { email, message };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSumbit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const message = formElements.message.value.trim();
  if (email === '' || message === '') {
    console.log('All form fields must be filled in:');
  } else {
    const formData = { email, message };
    console.log(formData);
    form.reset();
  }
  localStorage.removeItem(STORAGE_KEY);
}