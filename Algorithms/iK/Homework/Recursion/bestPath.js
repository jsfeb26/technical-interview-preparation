// Give a 2D matrix filled with numbers, find a valid path from the top-left corner to
// the bottom-right corner such that the sum of numbers in the path is maximal.
// A valid path consists of right steps and down steps only.
export default function bestPath(board) {
  return bp(board, 0, 0);
}

function bp(board, i, j) {
  console.log('bp');
  const n = board[0].length;
  const m = board.length;

  console.log(`n = ${n}`);
  console.log(`m = ${m}`);

  if (i === m - 1 && j === n - 1) {
    return board[i][j];
  }

  if (i === m - 1) {
    return board[i][j] + bp(board, i, j + 1);
  }

  if (j === n - 1) {
    return board[i][j] + bp(board, i + 1, j);
  }

  const down = board[i][j] + bp(board, i, j + 1);
  const right = board[i][j] + bp(board, i + 1, j);

  return Math.max(down, right);
}
