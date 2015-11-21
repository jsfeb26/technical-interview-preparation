export default function binarySearch(arr, searchValue) {
  return search(arr, searchValue, 0, arr.length - 1);
}

function search(arr, searchValue, leftPointer, rightPointer) {
  while (leftPointer <= rightPointer) {
    let guess = Math.floor((rightPointer - leftPointer) / 2) + leftPointer;

    if (arr[guess] === searchValue) {
      return guess;
    }
    else if (searchValue < arr[guess]) {
      rightPointer = guess - 1;
    }
    else {
      leftPointer = guess + 1;
    }
  }

  return -1;
}
