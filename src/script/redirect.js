import { getLoggedUser } from "./database.js";

export const moveToHome = () => {
  const loggedUser = getLoggedUser();

  if (loggedUser) {
    window.location.href = "/";
  }
}

export const moveToLogin = () => {
  const loggedUser = getLoggedUser();

  if (!loggedUser) {
    window.location.href = "/entrar";
  }
}