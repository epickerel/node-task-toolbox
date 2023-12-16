export const array2Cells = (arr, startX = 0, startY = 0) => {
  const cells = [];
  arr.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        cells.push({ x: x + startX, y: y + startY });
      }
    });
  });
  return cells;
};
