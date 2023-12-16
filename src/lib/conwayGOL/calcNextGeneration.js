import { getCellNeighbours } from './getCellNeighbours.js';

export const calcNextGeneration = (cells) => {
  const nextCells = [];
  const minX = Math.min(...cells.map((cell) => cell.x)) - 1;
  const maxX = Math.max(...cells.map((cell) => cell.x)) + 1;
  const minY = Math.min(...cells.map((cell) => cell.y)) - 1;
  const maxY = Math.max(...cells.map((cell) => cell.y)) + 1;
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const neighbours = getCellNeighbours(cells, x, y);
      if (cells.find((cell) => cell.x === x && cell.y === y)) {
        if (neighbours.length === 2 || neighbours.length === 3) {
          nextCells.push({ x, y });
        }
      } else if (neighbours.length === 3) {
        nextCells.push({ x, y });
      }
    }
  }
  return nextCells;
};
