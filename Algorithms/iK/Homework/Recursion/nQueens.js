// Solve the N-queen problem using recursion. (There may be other ways of solving this problem,
// but for the purpose of this exercise, please use recursion only).

// Problem statement: Place N queens on an NxN chessboard, such that no two queens are in line of
// attack of each other. In chess (and in real life too), a queen can move as far as
// she pleases, horizontally, vertically, or diagonally.

// Input: N
// Output: All possible arrangements of N queens on the board. Each arrangement can be
// represented by a matrix. Print the entire matrix, one per valid arrangement.
// For example, for N = 4, there are two possible arrangements, that can be printed as:
// +-+-+-+-+
// | | |*| |
// +-+-+-+-+
// |*| | | |
// +-+-+-+-+
// | | | |*|
// +-+-+-+-+
// | |*| | |
// +-+-+-+-+
//
// +-+-+-+-+
// | |*| | |
// +-+-+-+-+
// | | | |*|
// +-+-+-+-+
// |*| | | |
// +-+-+-+-+
// | | |*| |
// +-+-+-+-+

// Tests:  In your main() method, call your function for every N from 1 through 10, and print the output.

// Solution: https://leetcode.com/discuss/24717/comparably-concise-java-code

// (Suggested Time: 30 minutes; this is only a variation of permutations problem)

function print(matrix) {
  for (var i = 0; i < matrix.length; i += 1) {
    console.log(matrix[i].join('  '));
  }

  console.log('');
}

function isValid(matrix, y) {
  if (y <= 0) {
    return true;
  }

  var x = matrix[y].indexOf('Q');

  for (var iy = 0; iy < y; iy += 1) {
    var ix = matrix[iy].indexOf('Q');

    // check if in same row or in diagnol
    if (x === ix || (Math.abs(y - iy) === Math.abs(x - ix))) {
      return false;
    }
  }

  return true;
}

function placeQueen(matrix, y) {
  // if last queen not a valid position then backtrack to the next option
  if (!isValid(matrix, y - 1)) {
    return;
  }

  if (y === matrix.length) {
    print(matrix);
    return;
  }

  for (var x = 0; x < matrix.length; x += 1) {
    matrix[y][x] = 'Q';
    placeQueen(matrix, y + 1);
    matrix[y][x] = 'X';
  }
}

function nQueens(n) {
  console.log('N Queens for N = ' + n);
  var matrix = [];

  for (var i = 0; i < n; i += 1) {
    var yMatrix = [];

    for (var j = 0; j < n; j += 1) {
      yMatrix.push('X'); 
    }

    matrix.push(yMatrix);
  }

  placeQueen(matrix, 0);
}

nQueens(4);
