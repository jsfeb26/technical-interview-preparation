import {expect} from 'chai';
import calculateMin from '../Algorithms/iK/Homework/Graphs/snakesAndLadders';
import shortestPath from '../Algorithms/iK/Homework/Graphs/chessKnight';
import detectCycle from '../Algorithms/iK/Homework/Graphs/graphCycles';
import sort from '../Algorithms/iK/Homework/Graphs/topologicalSort';

describe('iK Graph Tests', () => {
  it('Snakes and Ladders', () => {
    const board = [0, 14, 2, 3, 6, 5,
                  6, 7, 26, 9, 10, 11,
                  12, 13, 14, 15, 3, 28,
                  18, 5, 20, 21, 22, 15,
                  34, 25, 26, 27, 28, 29,
                  30, 29, 32, 11, 34, 35];

    let minRolls = calculateMin(board);

    expect(minRolls).to.be.equal(4);
  });

  it('Shortest Path for Knight on Chessboard', () => {
    let path = shortestPath([0,0,], [7,7]);

    expect(path).to.deep.equal([ [ 0, 0 ], [ 2, 1 ], [ 0, 2 ], [ 2, 3 ], [ 4, 4 ], [ 6, 5 ], [ 7, 7 ] ]);
  });

  it('Detect if a Graph has a Cycle', () => {
    const graph1 = [
      [1,2],
      [2],
      [0,3],
      [3]
    ];

    const graph2 = [
      [1,2],
      [2],
      [3],
      []
    ];

    const graph3 = [
      [1,2],
      [2],
      [3,4],
      [],
      [0]
    ];

    const graph4 = [
      [1,2],
      [2],
      [3],
      [],
      [5],
      [4]
    ];

    const test1 = detectCycle(graph1);
    const test2 = detectCycle(graph2);
    const test3 = detectCycle(graph3);
    const test4 = detectCycle(graph4);

    expect(test1).to.be.equal(true);
    expect(test2).to.be.equal(false);
    expect(test3).to.be.equal(true);
    expect(test4).to.be.equal(true);
  });

  it('Alien Topological Sort', () => {
    const test1 = ['baa', 'abcd', 'abca', 'cab', 'cad'];
    const test2 = ['caa', 'aaa', 'aab'];
    const test3 = ['abc'];

    var result1 = sort(test1);
    var result2 = sort(test2);
    var result3 = sort(test3);

    expect(result1).to.be.equal('bdac');
    expect(result2).to.be.equal('cab');
    expect(result3).to.be.equal('abc');
  });
});
