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
