import { getUserList } from "./auth.js";

const trimContent = (content) => content.trim();

const safeContent = (content) => {
  const temporary = document.createElement("div");
  temporary.textContent = content;
  return temporary.innerHTML;
}

const formatContent = (content) => {
  return trimContent(safeContent(content));
}

const showError = (element, message) => {
  const parentElement = element.parentNode;
  const hasErrorElement = parentElement.querySelector(".error-message");

  if (!hasErrorElement) {
    const newErrorElement = `<span class="error-message">${message}</span>`;

    parentElement.insertAdjacentHTML('beforeend', newErrorElement);
  }

  element.classList.add("invalid-info");

  const errorElement = parentElement.querySelector(".error-message");

  setTimeout(() => {
    element.classList.remove("invalid-info");
    errorElement.remove();
  }, 3000);
}

export const nicknameValidation = (nicknameElement) => {
  const formattedNickname = formatContent(nicknameElement.value);
  const isValidNickname = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/.test(formattedNickname);

  if (isValidNickname && formattedNickname.length >= 3) {
    return formattedNickname;
  } else if (formattedNickname.length < 3) {
    showError(nicknameElement, "Apelido muito curto. Deve conter no mínimo 3 caracteres.");
  } else {
    showError(nicknameElement, "Apelido possui caracteres inválidos. Use apenas letras e números.");
  }
}

export const emailValidation = (emailElement) => {
  const formattedEmail = formatContent(emailElement.value.toLowerCase());
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formattedEmail);
  const emailAlreadyExists = getUserList().find(user => user["email"] === formattedEmail);

  if (emailAlreadyExists) {
    showError(emailElement, "O e-mail inserido já está sendo utilizado.");
    return false;
  }

  if (isValidEmail && formattedEmail.length >= 3) {
    return formattedEmail;
  } else if (formattedEmail.length === 0) {
    showError(emailElement, "O campo de e-mail não pode ser enviado vazio.");
  } else {
    showError(emailElement, "E-mail inválido. Por favor, insira um e-mail válido.");
  }
}

export const passwordValidation = (passwordElement, repeatedPasswordElement) => {
  const formattedPassword = formatContent(passwordElement.value);
  const formattedRepeatedPassword = formatContent(repeatedPasswordElement.value);
  const isValidPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!%&?*_]).{8,}$/.test(formattedPassword);

  if (formattedPassword !== formattedRepeatedPassword) {
    showError(repeatedPasswordElement, "As senhas não conferem. Ambas devem ser iguais.");

    return false;
  }

  if (isValidPassword && formattedPassword.length >= 8) {
    return formattedPassword;
  } else if (formattedPassword.length < 8) {
    showError(passwordElement, "A senha deve conter no mínimo 8 caracteres.");
  } else {
    showError(passwordElement, "A senha deve conter pelo menos uma letra, um número e um caractere especial permitido: @ # $ ! % & ? * _.");
  }
}