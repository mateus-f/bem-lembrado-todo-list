import { addTask } from "./task.js";
import { updateView } from "./view.js";
import { updateLoggedUser } from "./database.js";
import { formatContent } from "./contentUtils.js";

const signOutBtn = document.querySelector(".sign-out");
const inputTaskForm = document.querySelector(".input-task-form");
const inputForm = inputTaskForm.querySelector("input");

signOutBtn.addEventListener("click", () => {
  updateLoggedUser(null);
  updateView();
})

document.addEventListener("keydown", (e) => {
  if (e.key === "k" || e.key === "K") {
    inputForm.focus();
    e.preventDefault();
  }

  if (e.key === "Escape") {
    inputForm.blur();
  }
})

inputTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskToAdd = formatContent(inputForm.value);

  inputForm.value = "";

  if (taskToAdd) {
    addTask(taskToAdd);
  }
});

updateView();
