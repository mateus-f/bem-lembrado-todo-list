import { createNewUser, createNewUserId } from "../src/script/user.js";

describe("Criação do usuário", () => {
  it("Deve criar um novo id do usuário corretamente quando não existir nenhum usuário", () => {
    const expectedUserId = 1;

    const actualUserList = [];
    const actualUserId = createNewUserId(actualUserList);

    expect(actualUserId).toBe(expectedUserId);
  });

  it("Deve criar um novo id do usuário corretamente quando existir mais de um usuário cadastrado", () => {
    const expectedUserId = 3;

    const actualUserList = [{
      "id": 1,
      "nickname": "Usuario 1",
      "email": "one@usuario.com",
      "password": "usuario1_",
      "tasks": []
    }, {
      "id": 2,
      "nickname": "Usuario 2",
      "email": "two@usuario.com",
      "password": "usuario2_",
      "tasks": []
    }];
    const actualUserId = createNewUserId(actualUserList);

    expect(actualUserId).toBe(expectedUserId);
  });

  it("Deve criar um usuário corretamente", () => {
    const expectedUser = {
      "id": 1,
      "nickname": "Mateus",
      "email": "mateus@mateus.com",
      "password": "mateus1_",
      "tasks": []
    };

    const actualUser = createNewUser("Mateus", "mateus@mateus.com", "mateus1_", 1);

    expect(actualUser).toEqual(expectedUser);
  });
})