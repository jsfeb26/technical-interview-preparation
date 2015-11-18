export default function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    swap(array, i, minIndex);
  }

  return array;
}

function swap(array, oldValue, newValue) {
  let temp = array[oldValue];
  array[oldValue] = array[newValue];
  array[newValue] = temp;
}
