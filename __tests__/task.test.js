import { addTask, completeTask, createNewTaskId, removeTask, uncheckTask } from "../src/script/task.js";

describe("Criação de tarefas", () => {
  it("Deve criar um id para tarefa corretamente quando o usuário não tiver nenhuma tarefa na lista", () => {
    const expectedTaskId = 1;

    const actualTaskList = [];
    const actualTaskId = createNewTaskId(actualTaskList);

    expect(actualTaskId).toBe(expectedTaskId);
  });

  it("Deve adicionar uma nova tarefa a lista de tarefas do usuário quando a lista estiver vázia", () => {
    const expectedUserTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": false,
      "createdAt": "12/11/2025"
    }];

    const actualUserTaskList = addTask("Terminar atividade de matemática", 1, "12/11/2025", []);

    expect(actualUserTaskList).toEqual(expectedUserTaskList);
  });

  it("Deve adicionar uma nova tarefa a lista de tarefas do usuário quando a lista já possuir tarefa", () => {
    const expectedUserTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": true,
      "createdAt": "12/11/2025"
    }, {
      "id": 2,
      "title": "Criar um novo site",
      "isDone": false,
      "createdAt": "17/11/2025"
    }];

    const actualUserTaskList = addTask("Criar um novo site", 2, "17/11/2025", [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": true,
      "createdAt": "12/11/2025"
    }]);

    expect(actualUserTaskList).toEqual(expectedUserTaskList);
  });

  it("Deve retornar uma nova lista de tarefas corretamente quando uma tarefa for concluída", () => {
    const expectedUserTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": true,
      "createdAt": "12/11/2025"
    }, {
      "id": 2,
      "title": "Criar um novo site",
      "isDone": true,
      "createdAt": "17/11/2025"
    }];

    const userTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": true,
      "createdAt": "12/11/2025"
    }, {
      "id": 2,
      "title": "Criar um novo site",
      "isDone": false,
      "createdAt": "17/11/2025"
    }];
    const actualUserTaskList = completeTask(2, userTaskList);

    expect(actualUserTaskList).toEqual(expectedUserTaskList);
  });

  it("Deve retornar uma nova lista de tarefas corretamente quando uma tarefa for removida", () => {
    const expectedUserTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": true,
      "createdAt": "12/11/2025"
    }];

    const userTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": true,
      "createdAt": "12/11/2025"
    }, {
      "id": 2,
      "title": "Criar um novo site",
      "isDone": false,
      "createdAt": "17/11/2025"
    }];
    const actualUserTaskList = removeTask(2, userTaskList);

    expect(actualUserTaskList).toEqual(expectedUserTaskList);
  });

  it("Deve retornar uma nova lista de tarefas corretamente quando uma tarefa for desmarcada como completa", () => {
    const expectedUserTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": false,
      "createdAt": "12/11/2025"
    }];

    const userTaskList = [{
      "id": 1,
      "title": "Terminar atividade de matemática",
      "isDone": true,
      "createdAt": "12/11/2025"
    }];
    
    const actualUserTaskList = uncheckTask(1, userTaskList);

    expect(actualUserTaskList).toEqual(expectedUserTaskList);
  });
})