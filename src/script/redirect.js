import { getLoggedUser } from "./database.js";

export const moveToHome = () => {
  const loggedUser = getLoggedUser();

  if (loggedUser) {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }
}

export const moveToLogin = () => {
  const loggedUser = getLoggedUser();

  if (!loggedUser) {
    window.location.href = "/entrar";
  }
}