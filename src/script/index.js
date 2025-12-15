import { addTask, createNewTaskId, getTaskDate } from "./task.js";
import { updateView } from "./view.js";
import { getUserTaskList, updateLoggedUser, updateUserTaskList } from "./database.js";
import { formatContent } from "./contentUtils.js";

const signOutBtn = document.querySelector(".sign-out");
const inputTaskForm = document.querySelector(".input-task-form");
const inputForm = inputTaskForm.querySelector("input");

signOutBtn.addEventListener("click", () => {
  updateLoggedUser(null);
  updateView();
})

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    inputForm.focus();
  }

  if (e.key === "Escape") {
    inputForm.blur();
  }
})

inputTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskTitle = formatContent(inputForm.value);
  const userTaskList = getUserTaskList();
  const taskId = createNewTaskId(userTaskList);

  inputForm.value = "";

  if (taskTitle) {
    const newTaskList = addTask(taskTitle, taskId, getTaskDate(), userTaskList);
    updateUserTaskList(newTaskList);
  }
});

updateView();