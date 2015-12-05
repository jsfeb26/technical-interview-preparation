import {expect} from 'chai';
import bestPath from '../Algorithms/bestPath';

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
