export default function quickSort(arr) {
  sort(arr, 0, arr.length - 1);
}

function sort(arr, start, end) {
  if (start < end) {
    let pivot = parition(arr, start, end);
    sort(arr, start, pivot - 1);
    sort(arr, pivot + 1, end);
  }
}

function parition(arr, start, end) {
  let i = start;

  for (let j = start; j < end; j += 1) {
    if (arr[j] < arr[end]) {
      swap(arr, i, j);
      i += 1;
    }
  }

  swap(arr, i, end);
  return i;
}

function swap(arr, first, second) {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
