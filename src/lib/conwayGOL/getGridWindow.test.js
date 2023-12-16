import { getGridWindow } from './getGridWindow.js';

describe('getGridWindow', () => {
  let cells;
  let gridWindow;
  beforeEach(() => {
    cells = [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: -2, y: 1 },
    ];
    gridWindow = [
      [false, true, true, true],
      [false, true, true, false],
    ];
  });

  it('should return a grid window matching the specified coordinates and size', () => {
    const grid = getGridWindow(cells, 0, 0, 4, 2);
    expect(grid).toEqual(gridWindow);
  });
});
