import { showSuccess } from "./alerts.js";
import { createNewUser, moveToHome } from "./auth.js";
import { emailValidation, nicknameValidation, passwordValidation } from "./create-account-validation.js";

const createAccountForm = document.querySelector(".create-account-form");

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
    showSuccess(createAccountForm, "Usuário criado com sucesso!");
    moveToHome();
  }
})