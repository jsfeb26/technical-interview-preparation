import {expect} from 'chai';
import bestPath from '../Algorithms/bestPath';
import wildcard from '../Algorithms/wildcard';

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
