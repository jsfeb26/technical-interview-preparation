function insertionSort(array) {
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

console.log(insertionSort([3, 7, 2, 9, 4])); // [2, 3, 4, 7, 9]
