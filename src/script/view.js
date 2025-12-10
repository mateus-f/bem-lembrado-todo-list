import { moveToLogin } from "./redirect.js";
import { completeTask, removeTask } from "./task.js";
import { getLoggedUser, getUserTaskList } from "./database.js";

const showLoggedUserNickname = () => {
  const loggedUser = getLoggedUser();
  const loggedUserNickame = loggedUser["nickname"];
  const profileHeaderNickname = document.querySelector(".profile-content .name");

  profileHeaderNickname.textContent = loggedUserNickame;
}

const showPendingTaskScore = () => {
  const loggedUserTasks = getUserTaskList();

  const pedingTaskElement = document.querySelector(".profile-header .pending > .heading")
  const pendingTasks = loggedUserTasks.filter(task => task["isDone"] === false);

  pedingTaskElement.textContent = pendingTasks.length;
}

const showDoneTaskScore = () => {
  const loggedUserTasks = getUserTaskList();

  const doneTaskElement = document.querySelector(".profile-header .done > .heading")
  const doneTasks = loggedUserTasks.filter(task => task["isDone"] === true);

  doneTaskElement.textContent = doneTasks.length;
}

const showEmptyStateArea = () => {
  const emptyStateSection = document.querySelector(".empty-state-area");
  const taskList = getUserTaskList();

  if (taskList.length >= 1) {
    emptyStateSection.classList.add("hidden");
  } else {
    emptyStateSection.classList.remove("hidden");
  }
}

const showTaskList = () => {
  const taskListArea = document.querySelector(".task-list-area");
  const pendingTaskArea = taskListArea.querySelector(".pending .task-list");
  const doneTaskArea = taskListArea.querySelector(".done .task-list");
  const userTask = getUserTaskList();

  pendingTaskArea.innerHTML = "";
  doneTaskArea.innerHTML = "";

  if (userTask.length >= 1) {
    taskListArea.classList.add("show");
    taskListArea.classList.remove("hidden");

    userTask.map(task => {
      if (task["isDone"] === false) {
        pendingTaskArea.insertAdjacentHTML("beforeend", `
          <li class="task" data-task-id="${task["id"]}">
              <input type="checkbox" name="task-${task["id"]}" id="${task["id"]}">
              <div class="text">
                <span class="task">${task["title"]}</span>
                <span class="date">${task["createdAt"]}</span>
              </div>
              <button class="remove-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
              </button>
          </li>
        `);
      } else {
        doneTaskArea.insertAdjacentHTML("beforeend", `
          <li class="task" data-task-id="${task["id"]}">
              <div class="text">
                <span class="task">${task["title"]}</span>
                <span class="date">${task["createdAt"]}</span>
              </div>
              <button class="remove-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
              </button>
            </li>
        `);
      }
    })

    const checkBtns = document.querySelectorAll(".task input");
    const removeBtns = document.querySelectorAll(".remove-btn");

    checkBtns.forEach(checkBtn => checkBtn.addEventListener("click", () => completeTask(checkBtn)));
    removeBtns.forEach(removeBtn => removeBtn.addEventListener("click", () => removeTask(removeBtn)));
  } else {
    taskListArea.classList.remove("show");
    taskListArea.classList.add("hidden");
  }
}

export const updateView = () => {
  moveToLogin();
  showLoggedUserNickname();
  showPendingTaskScore();
  showDoneTaskScore();
  showEmptyStateArea();
  showTaskList();
}

