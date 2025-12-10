import { createDB, getUserList, updateDatabase } from "./database.js";

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