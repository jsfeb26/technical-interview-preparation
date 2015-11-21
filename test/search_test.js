import {expect} from 'chai';
import binarySearch from '../Algorithms/binarySearch';

describe('Array Search Tests', () => {
  it('Apply Binary Search on array', () => {
    const array = [1, 4, 7, 9, 23, 34, 46, 356, 699, 2000];

    const index = binarySearch(array, 1);
    const index1 = binarySearch(array, 2000);
    const index2 = binarySearch(array, 23);
    const index3 = binarySearch(array, 14);
    const index4 = binarySearch(array, 4);
    const index5 = binarySearch(array, 699);

    expect(index).to.equal(0);
    expect(index1).to.equal(9);
    expect(index2).to.equal(4);
    expect(index3).to.equal(-1);
    expect(index4).to.equal(1);
    expect(index5).to.equal(8);
  });
});
