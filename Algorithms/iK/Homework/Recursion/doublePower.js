// Implement a power function to raise a double to an int power, including negative powers.

// e.g. pow(double d, int p) should give 'd' raised to power 'p'.

// Of course, please don't use in-built methods like pow(). Idea is to implement that using recursion.

// (Test cases: Please put them in your main() method)

// Solution: http://stackoverflow.com/questions/101439/the-most-efficient-way-to-implement-an-integer-based-power-function-powint-int

// Suggested time: 10 minutes to do a brute-force and 15 with a trick that optimizes it.

export default function power(d, p) {
  if (p < 0) {
    d = (1/d);
    p = -p;
  }

  return pow(d, p);
}

function pow(d, p) {
  if (p === 0) {
    return 1;
  }

  if (p === 1) {
    return d;
  }

  return d * pow(d, p - 1);
}
