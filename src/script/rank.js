const RANKS = [
  { name: 'Iniciante I', minScore: 0 },
  { name: 'Iniciante II', minScore: 5 },
  { name: 'Iniciante III', minScore: 15 },
  { name: 'Produtivo I', minScore: 30 },
  { name: 'Produtivo II', minScore: 50 },
  { name: 'Produtivo III', minScore: 80 },
  { name: 'Focado I', minScore: 120 },
  { name: 'Focado II', minScore: 170 },
  { name: 'Focado III', minScore: 230 },
  { name: 'Eficiente I', minScore: 300 },
  { name: 'Eficiente II', minScore: 380 },
  { name: 'Eficiente III', minScore: 470 },
  { name: 'Mestre I', minScore: 570 },
  { name: 'Mestre II', minScore: 700 },
  { name: 'Mestre III', minScore: 850 },
  { name: 'Lendário I', minScore: 1000 },
  { name: 'Lendário II', minScore: 1200 },
  { name: 'Lendário III', minScore: 1500 },
];

export const getRankProgress = (score) => {
  const orderedRank = [...RANKS].sort((a, b) => b["minScore"] - a["minScore"]);
  const currentRankIndex = orderedRank.findIndex(rank => score >= rank["minScore"]);

  const currentRank = orderedRank[currentRankIndex];
  const nextRank = orderedRank[currentRankIndex - 1] ?? currentRank;

  return {
    "rankName": currentRank["name"],
    "nextTargetScore": nextRank["minScore"]
  }
}

export const getRank = (user) => {
  const { "rankName": currentRank } = getRankProgress(user["score"]);

  return { ...user, "rank": currentRank };
}

export const increaseScore = (user) => {
  const userWithIncreasedScore = { ...user, "score": user["score"] + 1 };

  return getRank(userWithIncreasedScore);
}

export const decreaseScore = (user) => {
  const userWithDecreasedScore = { ...user, "score": user["score"] > 0 ? user["score"] - 1 : 0 };

  return getRank(userWithDecreasedScore);
}