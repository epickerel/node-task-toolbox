import { array2Cells } from './array2Cells';

describe('array2Cells', () => {
  let arr;
  let expectedCells;
  it('should return an empty array when passed an empty array', () => {
    arr = [];
    expectedCells = [];
    expect(array2Cells(arr)).toEqual(expectedCells);
  });
  it('should return an array of live cells when passed an array of coordinates', () => {
    arr = [
      [true, false, false],
      [false, true, false],
      [false, false, true],
    ];
    expectedCells = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    expect(array2Cells(arr)).toEqual(expectedCells);
  });
});
