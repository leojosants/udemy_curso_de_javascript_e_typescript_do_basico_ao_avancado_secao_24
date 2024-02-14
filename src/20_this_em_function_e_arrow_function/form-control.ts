import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const confirmPassword = document.querySelector('.confirmPassword') as HTMLInputElement;

const submitEvent = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, confirmPassword);
  checkEmail(email);
  checkEqualsPassword(password, confirmPassword);

  if (shouldSendForm(target)) {
    // form.submit();
    clearFields();
    console.log('Formulário enviado!');
  }
};

form.addEventListener('submit', submitEvent);

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach(input => {
    if (!input.value) {
      showErrorMessage(input, 'Esste campo não pode ser vazio!');
    }
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'E-mail inválido!');
  }
}

function checkEqualsPassword(password: HTMLInputElement, confirmPassword: HTMLInputElement): void {
  if (password.value !== confirmPassword.value) {
    showErrorMessage(password, 'Senhas precisam ser iguais!');
    showErrorMessage(confirmPassword, 'Senhas precisam ser iguais!');
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => send = false);
  return send;
}

function clearFields() {
  username.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
}
