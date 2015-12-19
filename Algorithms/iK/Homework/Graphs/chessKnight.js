// (This is an interview twist on a classical CS problem)

// Assume you're given a normal chessboard and a knight that moves like in normal chess.
// You are then given two inputs: starting location and ending location in the form of
// x,y co-ordinates. The goal is to then calculate and print the shortest path that the knight
// can take to get to the target location.

// Solution: http://stackoverflow.com/questions/2339101/knights-shortest-path-chess-question

// chessboard is 8 x 8
// 0,7  1,7  2,7  3,7  4,7  5,7  6,7  7,7
// 0,6  1,6  2,6  3,6  4,6  5,6  6,6  7,6
// 0,5  1,5  2,5  3,5  4,5  5,5  6,5  7,5
// 0,4  1,4  2,4  3,4  4,4  5,4  6,4  7,4
// 0,3  1,3  2,3  3,3  4,3  5,3  6,3  7,3
// 0,2  1,2  2,2  3,2  4,2  5,2  6,2  7,2
// 0,1  1,1  2,1  3,1  4,1  5,1  6,1  7,1
// 0,0  1,0  2,0  3,0  4,0  5,0  6,0  7,0

export default function knightPath(start, end) {
  var queue = [];
  queue.push([start]);
  var shortestPath = null;

  while (queue.length > 0) {
    var current = queue.shift();
    var last = current[current.length - 1];
    var x = last[0];
    var y = last[1];

    if (shortestPath && current.length > shortestPath.length) {
      continue;
    }

    if (x === end[0] && y === end[1]) {
      if (!shortestPath || current.length < shortestPath.length) {
        shortestPath = current;
      }

      continue;
    }

    // moving up
    if (isValidMove(x - 2, y + 1)) {
      queue.push(copy(current, x - 2, y + 1));
    }
    if (isValidMove(x + 2, y + 1)) {
      queue.push(copy(current, x + 2, y + 1));
    }
    if (isValidMove(x - 1, y + 2)) {
      queue.push(copy(current, x - 1, y + 2));
    }
    if (isValidMove(x + 1, y + 2)) {
      queue.push(copy(current, x + 1, y + 2));
    }

    // moving down
    if (isValidMove(x - 2, y - 1)) {
      queue.push(copy(current, x - 2, y - 1));
    }
    if (isValidMove(x + 2, y - 1)) {
      queue.push(copy(current, x + 2, y - 1));
    }
    if (isValidMove(x - 1, y - 2)) {
      queue.push(copy(current, x - 1, y - 2));
    }
    if (isValidMove(x + 1, y - 2)) {
      queue.push(copy(current, x + 1, y - 2));
    }
  }

  return shortestPath;
}

function isValidMove(x, y) {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
    return true;
  }

  return false;
}

function copy(current, x, y) {
  var newCurrent = [];

  for (var i = 0; i < current.length; i += 1) {
    newCurrent.push([current[i][0], current[i][1]]);
  }

  newCurrent.push([x, y]);
  return newCurrent;
}
