import { conwayGOL } from '../lib/conwayGOL/index.js';
import { txt2Array } from '../lib/conwayGOL/txt2Array.js';
import { array2Cells } from '../lib/conwayGOL/array2Cells.js';

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

const startingGrid = txt2Array(`
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
`);

const startingCells = array2Cells(startingGrid);

const conway = async (context) => {
  console.log(`Executing ${task.name} task`);
  const game = conwayGOL();
  const displayW = 10;
  const displayH = 10;

  startingCells.forEach((cell) => {
    game.addCell(cell.x, cell.y);
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
