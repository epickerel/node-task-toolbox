export const getCellNeighbours = (cells, x, y) => {
  return cells.filter((cell) => {
    if (cell.x === x && cell.y === y) {
      return false;
    }
    if (cell.x >= x - 1 && cell.x <= x + 1 && cell.y >= y - 1 && cell.y <= y + 1) {
      return true;
    }
    return false;
  });
};
