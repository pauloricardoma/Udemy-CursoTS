import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('#form') as HTMLFormElement;
const { username, email, password, password2 } = form;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.currentTarget as HTMLFormElement;

  hideErrorsMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
  shouldSendForm(target) && form.submit();
};

export const haha = form.addEventListener('submit', submitEventFn);

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ser vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (input.value && !isEmail(input.value))
    showErrorMessage(input, 'E-mail inválido');
}

function checkEqualPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas precisam ser iguais');
    showErrorMessage(password2, 'Senhas precisam ser iguais');
  }
}

function hideErrorsMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).length !== 0 &&
    (send = false);

  return send;
}
