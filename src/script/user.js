export const createNewUserId = (currentUserList) => {
  const maxId = Math.max(...currentUserList.map(user => user["id"])) ?? 0;
  const nextId = currentUserList.length > 0 ? maxId + 1 : 1;

  return nextId;
}

export const createNewUser = (nickname, email, password, id) => {
  const newUser = {
    "id": id,
    "nickname": nickname,
    "email": email,
    "password": password,
    "tasks": []
  };

  return newUser;
}