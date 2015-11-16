function mergeSort(A, start, end) {
  if (start < end) {
    // get middle value and then add it to start to get middle point of current array
    let middle = Math.floor((end - start) / 2) + start;

    mergeSort(A, start, middle);
    mergeSort(A, middle + 1, end);
    merge(A, start, middle, end);
  }
}

function merge(A, start, middle, end) {
  let left = [];
  let right = [];

  // create to temp arrays left and right
  for (let i = start; i <= middle; i += 1) {
    left.push(A[i]);
  }

  for (let j = middle + 1; j <= end; j += 1) {
    right.push(A[j]);
  }

  let i = 0,
      j = 0;

  // merge the two temp arrays back into the original array
  for (let k = start; k <= end; k += 1) {
    if (i >= left.length) {
      A[k] = right[j];
      j += 1;
    }
    else if (j >= right.length) {
      A[k] = left[i];
      i += 1;
    }
    else if (left[i] <= right[j]) { // less than or equal to make it stable
      A[k] = left[i];
      i += 1;
    }
    else {
      A[k] = right[j];
      j += 1;
    }
  }

  return A;
}

let testArray = [7, 3, 9, 14, 8, 2, 1];
mergeSort(testArray, 0, testArray.length - 1);
console.log(testArray);
