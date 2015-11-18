import {expect} from 'chai';
import insertionSort from '../Algorithms/insertionSort';
import mergeSort from '../Algorithms/mergeSort';

describe('Array Sorting Algoritmhs', () => {
  it('Insertion Sort correctly sorts array', () => {
    const array = [3, 7, 2, 9, 4, 1, 14, 97, 34];

    const sortedArray = insertionSort(array);

    // need to add the deep to do a deep comparison and compare all values
    // rahter than compare by reference
    expect(sortedArray).to.deep.equal([1, 2, 3, 4, 7, 9, 14, 34, 97]);
  });

  it('Merge Sort correctly sorts array', () => {
    let array = [3, 7, 2, 9, 4, 1, 14, 97, 34];

    mergeSort(array, 0, array.length - 1);

    expect(array).to.deep.equal([1, 2, 3, 4, 7, 9, 14, 34, 97]);
  });
});
