import {expect} from 'chai';
import bestPath from '../Algorithms/bestPath';
import wildcard from '../Algorithms/wildcard';
import countTrees from '../Algorithms/countTrees';

describe('Best Path Algorithm', () => {
  it('Basic Best Path correct test', () => {
    // 1 3 4 5 2
    // 9 8 2 3 4
    // 2 7 9 8 2
    // 1 + 9 + 8 + 7 + 9 + 8 + 2
    const board = [
      [1, 3, 4, 5, 2],
      [9, 8, 2, 3, 4],
      [2, 7, 9, 8, 2]
    ];

    const result = bestPath(board);

    expect(result).to.equal(1 + 9 + 8 + 7 + 9 + 8 + 2);
  });
});

describe('Wildcard Algorithm', () => {
  it('10? Correct Solution', () => {
    var result = wildcard('10?');

    expect(result).to.equal('100 101');
  });

  it('1?0? Correct Solution', () => {
    var result = wildcard('1?0?');

    expect(result).to.equal('1000 1001 1100 1101');
  });

  it('Edge case 10', () => {
    var result = wildcard('10');

    expect(result).to.equal('10');
  });
});

describe('Count Trees Algorithm', () => {
  it('1 Correct Solution', () => {
    var result = countTrees(1);

    expect(result).to.equal(1);
  });

  it('2 Correct Solution', () => {
    var result = countTrees(2);

    expect(result).to.equal(2);
  });

  it('3 Correct Solution', () => {
    var result = countTrees(3);

    expect(result).to.equal(5);
  });

  it('4 Correct Solution', () => {
    var result = countTrees(4);

    expect(result).to.equal(14);
  });

  it('5 Correct Solution', () => {
    var result = countTrees(5);

    expect(result).to.equal(42);
  });

  it('6 Correct Solution', () => {
    var result = countTrees(6);

    expect(result).to.equal(132);
  });
});
