import { createNewUser, moveToHome } from "./auth.js";
import { emailValidation, nicknameValidation, passwordValidation } from "./create-account-validation.js";

const createAccountForm = document.querySelector(".create-account-form");

const showSuccess = () => {
  const hasSuccessElement = createAccountForm.querySelector(".success");

  if (!hasSuccessElement) {
    const newSucessElement = `<span class="success">Usuário criado com sucesso!</span>`;
    createAccountForm.insertAdjacentHTML("beforeend", newSucessElement);
  }

  const successElement = createAccountForm.querySelector(".success");

  setTimeout(() => {
    successElement.remove();
  }, 1000);
}

createAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitButton = createAccountForm.querySelector("button");
  const nicknameInput = document.querySelector("#create-account-nickname");
  const emailInput = document.querySelector("#create-account-email");
  const passwordInput = document.querySelector("#create-account-password");
  const repeatedPasswordInput = document.querySelector("#create-account-repeat-password");

  const validNickname = nicknameValidation(nicknameInput);
  const validEmail = emailValidation(emailInput);
  const validPassword = passwordValidation(passwordInput, repeatedPasswordInput);
  const validInformation = validNickname && validEmail && validPassword;

  if (validInformation) {
    submitButton.disabled = true;
    createNewUser(validNickname, validEmail, validPassword);
    showSuccess();
    moveToHome();
  }
})