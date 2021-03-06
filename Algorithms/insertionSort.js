export default function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j -= 1;
    }

    array[j + 1] = current;
  }

  return array;
}
