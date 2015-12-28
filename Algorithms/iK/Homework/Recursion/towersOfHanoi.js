// A Tower of Hanoi is a game, that consists of three rods, and a number of disks of
// different sizes which can slide onto any rod. The game starts with the disks in a neat
// stack in ascending order of size on one rod, the smallest at the top.
// The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

// 1. Only one disk can be moved at a time.
// 2. Each move consists of taking the upper disk from one of the stacks and placing it on
// top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// 3. No disk may be placed on top of a smaller disk.

// Input: Number of disks in the first rod. e.g if the number is 5, you can assume that disks
// are arranged with 1 on top of 2, 2 on top of 3 and so on, until 4 on top of 5, with 5 at the bottom.

// Output: Series of steps which leads to all disks landing on the third rod.
// Each step can be represented by printing the number of disks on each rod after the step is taken.

// There are no test-cases set, because of the fluid nature of the output.
// Feel free to hard code the input and display the output on STDOUT.

// Solution: http://www.cs.cmu.edu/~cburch/survey/recurse/hanoiimpl.html

// (Suggested time: 45 minutes; maybe a little more if you are printing output nicely)

//T(n) = O(2^n)
// S(n) = O(n)
function towersOfHanoi(n) {
  var towers = {
    'A': n,
    'B': 0,
    'C': 0,
    print: function print() {
      console.log('');
      console.log('Tower A has ' + this['A'] + ' discs');
      console.log('Tower B has ' + this['B'] + ' discs');
      console.log('Tower C has ' + this['C'] + ' discs');
    }
  }

  move(n, towers, 'A', 'C', 'B');
}

function move(n, towers, from, to, inter) {
  if (n === 1) {
    moveAction(towers, from, to);
  }
  else {
    // move to the inter from before using the to from before
    move(n - 1, towers, from, inter, to);
    moveAction(towers, from, to);

    // move from inter to the original destination
    move(n - 1, towers, inter, to, from);
  }
}

function moveAction(towers, from, to) {
  towers[from] -= 1;
  towers[to] += 1;
  towers.print();
}

towersOfHanoi(3);
