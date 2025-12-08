import { getObject, setObject } from "./state-control.js"

const createDB = () => {
  const db = {
    "loggedUser": null,
    "users": []
  }

  if (!getObject("database")) {
    setObject("database", db);
  }
}

export const updateLoggedUser = (user) => {
  setObject("database", { ...getObject("database"), "loggedUser": user });
}

const updateDatabase = (user) => {
  const db = getObject("database");
  const loggedUser = db["loggedUser"];
  const userExists = db["users"].find(dbUser => dbUser["email"] === user["email"]);

  if (!loggedUser) {
    updateLoggedUser(user);
  }

  if (userExists) {
    const newUserList = db["users"].map((dbUser) => {
      if (dbUser["email"] === user["email"]) {
        return user;
      }

      return dbUser;
    });

    setObject("database", { ...getObject("database"), "users": newUserList });
  } else {
    setObject("database", { ...getObject("database"), "users": [...db["users"], user] });
  }
}

export const moveToHome = () => {
  const db = getObject("database");
  const loggedUser = db["loggedUser"];

  if (loggedUser) {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }
}

export const moveToLogin = () => {
  const db = getObject("database");
  const loggedUser = db["loggedUser"];

  if (!loggedUser) {
    window.location.href = "/entrar";
  }
}

export const getUserList = () => {
  const db = getObject("database");
  const userList = db["users"];

  return userList;
}

const createNewUserId = () => {
  const usersList = getUserList();
  const maxId = Math.max(...usersList.map(user => user["id"])) ?? 0;
  const nextId = usersList.length > 0 ? maxId + 1 : 1;

  return nextId;
}

export const createNewUser = (nickname, email, password) => {
  createDB();

  const user = {
    "id": createNewUserId(),
    "nickname": nickname,
    "email": email,
    "password": password,
    "tasks": []
  };

  updateDatabase(user);
}

createDB();