import { getObject, setObject } from "./state-control.js"
import { updateView } from "./view.js";

export const createDB = () => {
  const db = {
    "loggedUser": null,
    "users": []
  }

  if (!getObject("database")) {
    setObject("database", db);
  }
}

export const getLoggedUser = () => {
  const db = getObject("database");
  return db["loggedUser"];
}

export const getUserList = () => {
  const db = getObject("database");
  const userList = db["users"];

  return userList;
}

export const updateDatabase = (user) => {
  const loggedUser = getLoggedUser();
  const users = getUserList();
  const userExists = users.find(dbUser => dbUser["email"] === user["email"]);

  if (!loggedUser || loggedUser["email"] === user["email"]) {
    updateLoggedUser(user);
  }

  if (userExists) {
    const newUserList = users.map((dbUser) => {
      if (dbUser["email"] === user["email"]) {
        return user;
      }

      return dbUser;
    });

    setObject("database", { ...getObject("database"), "users": newUserList });
  } else {
    setObject("database", { ...getObject("database"), "users": [...users, user] });
  }
}

export const updateLoggedUser = (user) => {
  setObject("database", { ...getObject("database"), "loggedUser": user });
}

export const getUserTaskList = () => {
  const loggedUser = getLoggedUser();

  return loggedUser["tasks"];
}

export const updateUserTaskList = (newTaskList) => {
  const loggedUser = getLoggedUser();
  const newUser = { ...loggedUser, "tasks": newTaskList };

  updateDatabase(newUser);
  updateView();
}