import { getUserTaskList, updateUserTaskList } from "./database.js";

const createNewTaskId = () => {
  const userTask = getUserTaskList();
  const maxId = Math.max(...userTask.map(task => task["id"])) ?? 0;
  const nextId = userTask.length > 0 ? maxId + 1 : 1;

  return nextId;
}

const getTaskId = (taskChildren) => {
  const taskParent = taskChildren.parentElement;
  const taskReferenceId = Number(taskParent.getAttribute("data-task-id"));

  return taskReferenceId;
}

const getTaskDate = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate().toString().padStart(2, "0");
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const currentYear = currentDate.getFullYear();

  return `${currentDay}/${currentMonth}/${currentYear}`;
}

export const addTask = (title) => {
  const taskList = getUserTaskList();
  const newTask = {
    "id": createNewTaskId(),
    "title": title,
    "isDone": false,
    "createdAt": getTaskDate()
  }
  const newTaskList = [...taskList, newTask];

  updateUserTaskList(newTaskList);
}

export const completeTask = (completedTask) => {
  const taskList = getUserTaskList();
  const taskId = getTaskId(completedTask);
  const newTaskList = taskList.map((task) => {
    if (task["id"] === taskId) {
      return { ...task, "isDone": true };
    }

    return task;
  })

  updateUserTaskList(newTaskList);
}

export const removeTask = (taskReference) => {
  const taskList = getUserTaskList();
  const taskId = getTaskId(taskReference);
  const newTaskList = taskList.filter(task => task["id"] !== taskId);

  updateUserTaskList(newTaskList);
}

export const uncheckTask = (taskToUncheck) => {
  const taskList = getUserTaskList();
  const taskId = getTaskId(taskToUncheck);
  const newTaskList = taskList.map((task) => {
    if (task["id"] === taskId) {
      return { ...task, "isDone": false };
    }

    return task;
  })

  updateUserTaskList(newTaskList);
}