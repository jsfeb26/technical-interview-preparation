export default function bubbleSort(array) {
  let sortedIndex = array.length - 1;

  while (sortedIndex > 0) {
    for (let i = 0; i < sortedIndex; i += 1) {
      if (array[i] > array[i+1]) {
        swap(array, i, i + 1);
      }
    }

    sortedIndex -= 1;
  }

  return array;
}

function swap(array, first, second) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}
