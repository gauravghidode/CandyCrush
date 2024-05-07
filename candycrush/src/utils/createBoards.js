import { candies } from "./candyData";

export const createBoard = (boardSize = 8) =>
  Array(boardSize * boardSize)
    .fill(null)
    .map(() => candies[Math.floor(Math.random() * candies.length)]);

