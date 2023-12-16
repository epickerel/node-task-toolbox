export const getGridWindow = (cells, xStart, yStart, width, height) => {
  const grid = [];
  for (let y = yStart; y < yStart + height; y++) {
    const row = [];
    for (let x = xStart; x < xStart + width; x++) {
      row.push(cells.find((cell) => cell.x === x && cell.y === y) ? true : false);
    }
    grid.push(row);
  }
  return grid;
};
