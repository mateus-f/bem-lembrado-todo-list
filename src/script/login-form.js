import { moveToHome, updateLoggedUser } from "./auth.js";
import { loginValidation } from "./login-form-validation.js";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.querySelector("#login-email");
  const passwordInput = document.querySelector("#login-password");
  const userFound = loginValidation(emailInput, passwordInput);

  if (userFound) {
    updateLoggedUser(userFound);
    moveToHome();
  }
})