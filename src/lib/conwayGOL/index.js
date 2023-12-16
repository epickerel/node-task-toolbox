import { getGridWindow } from './getGridWindow.js';
import { calcNextGeneration } from './calcNextGeneration.js';

export const conwayGOL = () => {
  let cells = []; // Any cell that is tracked is alive and any cell that is not tracked is dead
  const api = {
    addCell: (x, y) => {
      cells.push({ x, y });
      return api;
    },
    getGrid: (xStart, yStart, width, height) => {
      return getGridWindow(cells, xStart, yStart, width, height);
    },
    doNextGeneration: () => {
      cells = calcNextGeneration(cells);
      return api;
    },
  };
  return api;
};
