export const createNewTaskId = (currentTaskList) => {
  const maxId = Math.max(...currentTaskList.map(task => task["id"])) ?? 0;
  const nextId = currentTaskList.length > 0 ? maxId + 1 : 1;

  return nextId;
}

export const getTaskId = (taskChildren) => {
  const taskParent = taskChildren.parentElement;
  const taskReferenceId = Number(taskParent.getAttribute("data-task-id"));

  return taskReferenceId;
}

export const getTaskDate = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate().toString().padStart(2, "0");
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const currentYear = currentDate.getFullYear();

  return `${currentDay}/${currentMonth}/${currentYear}`;
}

export const addTask = (taskTitle, taskId, taskDate, currentTaskList) => {
  const taskList = currentTaskList;
  const newTask = {
    "id": taskId,
    "title": taskTitle,
    "isDone": false,
    "createdAt": taskDate
  }
  const newTaskList = [...taskList, newTask];

  return newTaskList;
}

export const completeTask = (currentTaskId, currentTaskList) => {
  const taskList = currentTaskList;
  const taskId = currentTaskId;
  const newTaskList = taskList.map((task) => {
    if (task["id"] === taskId) {
      return { ...task, "isDone": true };
    }

    return task;
  })

  return newTaskList;
}

export const removeTask = (currentTaskId, currentTaskList) => {
  const taskList = currentTaskList;
  const taskId = currentTaskId;
  const newTaskList = taskList.filter(task => task["id"] !== taskId);

  return newTaskList;
}

export const uncheckTask = (currentTaskId, currentTaskList) => {
  const taskList = currentTaskList;
  const taskId = currentTaskId;
  const newTaskList = taskList.map((task) => {
    if (task["id"] === taskId) {
      return { ...task, "isDone": false };
    }

    return task;
  })

  return newTaskList;
}