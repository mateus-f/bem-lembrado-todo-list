import { getLoggedUser } from "./database.js";

const overlay = document.querySelector(".loader-overlay");

export const moveToHome = () => {
  const loggedUser = getLoggedUser();

  if (loggedUser) {
    overlay.classList.remove("hidden");

    setTimeout(() => {
      window.location.href = "/";
      overlay.classList.add("hidden");
    }, 500);
  }
}

export const moveToLogin = () => {
  const loggedUser = getLoggedUser();

  if (!loggedUser) {
    overlay.classList.remove("hidden");
    
    setTimeout(() => {
      window.location.href = "/entrar";
      overlay.classList.add("hidden");
    }, 500);
  }
}