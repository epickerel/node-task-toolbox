import { txt2Array } from './txt2Array.js';

describe('txt2Array', () => {
  it('should return an array matching the input text', () => {
    const inputText = `
      .....
      .***.
      .*...
    `;
    const result = txt2Array(inputText);
    expect(result).toEqual([
      [false, false, false, false, false],
      [false, true, true, true, false],
      [false, true, false, false, false],
    ]);
  });
});
