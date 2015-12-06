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
