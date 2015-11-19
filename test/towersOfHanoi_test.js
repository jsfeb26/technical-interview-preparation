import {expect} from 'chai';
import move from '../Algorithms/towersOfHanoi';

describe('Towers of Hanoi Tests', () => {
  it('Basic Towers of Hanoi Test', () => {
    move(5, 'A', 'B', 'C');
  });
});
