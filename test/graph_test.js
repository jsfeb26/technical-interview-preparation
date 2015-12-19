import {expect} from 'chai';
import calculateMin from '../Algorithms/iK/Homework/Graphs/snakesAndLadders';

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
});
