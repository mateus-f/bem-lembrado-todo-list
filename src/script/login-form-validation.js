import { showError } from "./alerts.js";
import { getUserList } from "./database.js";
import { formatContent } from "./contentUtils.js";

export const loginValidation = (emailElement, passwordElement) => {
  const users = getUserList();
  const validEmail = emailValidation(emailElement, users);
  const validPassword = passwordValidation(passwordElement, validEmail, users);
  const userFound = users.find(user => user["email"] === validEmail && user["password"] === validPassword);

  return userFound;
}

const emailValidation = (emailElement, users) => {
  const formattedEmail = formatContent(emailElement.value);
  const isEmailRegistered = users.find(user => user["email"] === formattedEmail);

  if (formattedEmail.length === 0) {
    showError(emailElement, "O campo de e-mail não pode ser enviado vazio.");
    return false;
  } else if (!isEmailRegistered) {
    showError(emailElement, "E-mail não encontrado. Verifique e tente novamente.");
    return false;
  }

  return formattedEmail;
}

const passwordValidation = (passwordElement, email, users) => {
  const formattedPassword = formatContent(passwordElement.value);
  const isWrongPassword = users.find(user => user["email"] === email && user["password"] !== formattedPassword);

  if (formattedPassword.length === 0) {
    showError(passwordElement, "O campo de senha não pode ser enviado vazio.");
    return false;
  } else if (isWrongPassword) {
    showError(passwordElement, "Senha incorreta. Verifique e tente novamente.");
    return false;
  }

  return formattedPassword;
}