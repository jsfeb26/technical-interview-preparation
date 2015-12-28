// '?' is a wildcard
// Input: 10?
// Output: 101 100
//
// Input: 1?0?
// Output: 1000 1001 1100 1101
//
// T(wc) = O(2^wc)
// S(wc) = 0(wc)

// Please write a program that takes given strings as input and produces the suggested output.

// Suggested time: 20 minutes.
function calculateWildcard(strArray, result) {
  var wildCardIndex = strArray.indexOf('?');

  // if no more wildCards then add to result array
  if (wildCardIndex < 0) {
    result.push(strArray.join(''));
  }
  else {
    // replace wildcard with 0
    strArray[wildCardIndex] = 0;
    calculateWildcard(strArray, result);

    // replace wildcard with 1
    strArray[wildCardIndex] = 1;
    calculateWildcard(strArray, result);

    // put wildcard card back to ?
    strArray[wildCardIndex] = '?';
  }
}

export default function wildcard(str) {
  if (str.indexOf('?') < 0) {
    return str;
  }
  else {
    var result = [];
    calculateWildcard(str.split(''), result);
    return result.join(' ');
  }
}
