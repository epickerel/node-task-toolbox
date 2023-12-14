const task = {
  name: 'conway',
  description: '',
};

const conwayGOL = () => {
  let cells = [];
  const getNeighbors = (x, y) => {
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
  const api = {
    addCell: (x, y) => {
      cells.push({ x, y });
      return api;
    },
    getGrid: (xStart, yStart, width, height) => {
      const grid = [];
      for (let y = yStart; y < yStart + height; y++) {
        const row = [];
        for (let x = xStart; x < xStart + width; x++) {
          row.push(cells.find((cell) => cell.x === x && cell.y === y) ? true : false);
        }
        grid.push(row);
      }
      return grid;
    },
    doNextGeneration: () => {
      const nextCells = [];
      const minX = Math.min(...cells.map((cell) => cell.x)) - 1;
      const maxX = Math.max(...cells.map((cell) => cell.x)) + 1;
      const minY = Math.min(...cells.map((cell) => cell.y)) - 1;
      const maxY = Math.max(...cells.map((cell) => cell.y)) + 1;
      for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
          const neighbors = getNeighbors(x, y);
          if (cells.find((cell) => cell.x === x && cell.y === y)) {
            if (neighbors.length === 2 || neighbors.length === 3) {
              nextCells.push({ x, y });
            }
          } else if (neighbors.length === 3) {
            nextCells.push({ x, y });
          }
        }
      }
      cells = nextCells;
      return api;
    },
  };
  return api;
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
  let game = conwayGOL();
  const displayW = 10;
  const displayH = 10;
  startingGrid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        game = game.addCell(x, y);
      }
    });
  });
  while (true) {
    const grid = game.getGrid(0, 0, displayW, displayH);
    console.clear();
    // console.log('\n');
    console.log(renderGrid(grid));
    game.doNextGeneration();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

export default conway;

export { task };
