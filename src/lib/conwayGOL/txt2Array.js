export const txt2Array = (txt, aliveChar = '*') =>
  txt
    .trim() // allow for a leading/trailing return of carraige
    .split('\n')
    .map((row) =>
      row
        .trim()
        .split('')
        .map((cell) => (cell === aliveChar ? true : false)),
    );
