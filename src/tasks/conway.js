import { conwayGOL } from '../lib/conwayGOL/index.js';

const task = {
  name: 'conway',
  description: '',
};

const renderGrid = (grid) => {
  const width = grid[0].length;
  const height = grid.length;
  const rows = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      row.push(grid[y][x] ? '*' : '.');
    }
    rows.push(row.join(''));
  }
  return rows.join('\n');
};

const startingGrid = `
..........
...**.....
....*.....
..........
..........
...**.....
..**......
.....*....
....*.....
..........
`
  .split('\n')
  .map((row) =>
    row
      .trim()
      .split('')
      .map((cell) => (cell === '*' ? true : false)),
  );

const conway = async (context) => {
  console.log(`Executing ${task.name} task`);
  const game = conwayGOL();
  const displayW = 10;
  const displayH = 10;
  startingGrid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        game.addCell(x, y);
      }
    });
  });
  while (true) {
    const grid = game.getGrid(0, 0, displayW, displayH);
    console.clear();
    console.log(renderGrid(grid));
    game.doNextGeneration();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

export default conway;

export { task };
