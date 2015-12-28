// A “Palindromic Decomposition” of string S, is a decomposition of the string into substrings,
// such that all those substrings are valid palindromes. A single character is considered a
// valid palindrome for this problem. Print out all possible palindromic decompositions of a given string.

// e.g.
// Input: abracadabra

// Output:
// a|b|r|a|c|a|d|a|b|r|a|
// a|b|r|a|c|ada|b|r|a|
// a|b|r|aca|d|a|b|r|a|

// Solution: http://www.programcreek.com/2013/03/leetcode-palindrome-partitioning-java/
// (Hopefully, this solution will make you appreciate Recursion and eventually, Dynamic Programming :-))

// (Suggested time: 45 minutes)

export default function palindromicDecomposition(strInput) {
  if (!strInput) {
    console.log('');
    return;
  }

  return decomp(strInput, [], 0, []);
}

function decomp(strInput, partition, start, result) {
  if (start === strInput.length) {
    result.push(partition.join('|') + '|');
    return;
  }

  for (var i = start + 1; i <= strInput.length; i += 1) {
    var str = strInput.substring(start, i);

    if (isValidPalindrome(str)) {
      partition.push(str);
      decomp(strInput, partition, i, result);
      partition.length = partition.length - 1; // remove last value
    }
  }

  return result;
}

function isValidPalindrome(str) {
  var i = 0;
  var j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i += 1;
    j -= 1;
  }

  return true;
}
