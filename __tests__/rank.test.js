import { decreaseScore, getRank, getRankProgress, increaseScore } from "../src/script/rank";
import { createNewUser } from "../src/script/user";

describe("Criação do rank", () => {
  it("Deve calcular corretamente pontuação do usuário quando um ponto for adicionado", () => {
    const expectedUserScore = 1;
    const user = createNewUser("Mateus", "mateus@mateus.com", "mateus0_", 1);

    const actualUser = increaseScore(user);
    const actualUserScore = actualUser["score"];

    expect(actualUserScore).toBe(expectedUserScore);
  });

  it("Deve calcular corretamente pontuação do usuário quando um ponto for diminuído e sua pontuação for maior que zero", () => {
    const expectedUserScore = 321;
    const user = createNewUser("Mateus", "mateus@mateus.com", "mateus0_", 1);
    const userWithIncreasedScore = { ...user, "score": 322 };

    const actualUser = decreaseScore(userWithIncreasedScore);
    const actualUserScore = actualUser["score"];

    expect(actualUserScore).toBe(expectedUserScore);
  });

  it("Deve calcular corretamente pontuação do usuário quando um ponto for diminuído e sua pontuação for zero", () => {
    const expectedUserScore = 0;
    const user = createNewUser("Mateus", "mateus@mateus.com", "mateus0_", 1);

    const actualUser = decreaseScore(user);
    const actualUserScore = actualUser["score"];

    expect(actualUserScore).toBe(expectedUserScore);
  });

  it("Deve retornar corretamente progresso do rank atual quando receber a pontuação do usuário", () => {
    const expectedRankProgress = {
      "rankName": "Eficiente I",
      "nextTargetScore": 380
    };
    const userScore = 340;

    const actualRankProgess = getRankProgress(userScore);

    expect(actualRankProgess).toEqual(expectedRankProgress);
  });

  it("Deve retornar corretamente nome do rank atual do usuário quando receber a pontuação do usuário", () => {
    const expectedRank = "Lendário III";
    const user = createNewUser("Mateus", "mateus@mateus.com", "mateus0_", 1);
    const userWithIncreasedScore = { ...user, "score": 1700 };

    const actualUser = getRank(userWithIncreasedScore);
    const actualRank = actualUser["rank"];

    expect(actualRank).toEqual(expectedRank);
  });
})