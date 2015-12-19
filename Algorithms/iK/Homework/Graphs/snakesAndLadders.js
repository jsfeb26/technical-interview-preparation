// Given a snake and ladder rectangular MxN board-game, find the minimum number of dice throws
// required to reach the final cell from the 1st cell.

// Rules are as usual: If after a dice-throw, the player reaches a cell where the ladder starts,
// the player has to climb up that ladder and if the player reaches a cell that has the mouth of
// the snake, s/he has to go down to the tail of snake.

// For example, in the board given below, it will take minimum 4 throws to reach from 1 to 36.
// That can be done with the following sequence of throws: (1,6,4,1). There may be more such
// sequences of the same length viz. (4,2,6,4) etc.

// Please hard-code input game boards as your test-cases. There are different ways of doing so.
// e.g. one simple way, is to represent it using a one-dimensional array of length MxN, with each
// element representing a cell. Values in the array, are the destination cell id for
// snakes (lower numbers) and ladders (higher numbers).

// Solution: http://www.geeksforgeeks.org/snake-ladder-problem-2/

// (Suggested time: 45 minutes)

export default function calculateMin(board) {
  var min = null;
  var graphQueue = [];
  graphQueue.push({'count': 0, 'space': 0});

  while (graphQueue.length > 0) {
    var current = graphQueue.shift();

    if (min && current.count > min) {
      continue;
    }

    if (current.space === board.length - 1) {
      if (!min || current.count < min) {
        min = current.count;
      }

      continue;
    }

    for (var i = 0; i <= 6; i += 1) {
      if (current.space + 1 < board.length) {
        graphQueue.push({'count': current.count + 1, 'space': board[current.space + i]});
      }
    }
  }

  return min;
}
