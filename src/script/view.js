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

  const pedingTaskElement = document.querySelector(".cards .pending > .heading")
  const pendingTasks = loggedUserTasks.filter(task => task["isDone"] === false);

  pedingTaskElement.textContent = pendingTasks.length;
}

const showDoneTaskScore = () => {
  const loggedUserTasks = getUserTaskList();

  const doneTaskElement = document.querySelector(".cards .done > .heading")
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
                <span class="task-title">${task["title"]}</span>
                <span class="date">${task["createdAt"]}</span>
              </div>
              <button class="remove-btn" title="Deletar tarefa">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                </svg>
              </button>
          </li>
        `);
      } else {
        doneTaskArea.insertAdjacentHTML("beforeend", `
          <li class="task" data-task-id="${task["id"]}">
              <div class="text">
                <span class="task-title">${task["title"]}</span>
                <span class="date">${task["createdAt"]}</span>
              </div>
              <button class="remove-btn" title="Deletar tarefa">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
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

