// Problem:
// Print out all the subsets of a set.

// E.g.
// {x,y} ==> {{}, {x}, {y}, {x,y}} [Remember, that we are working with sets,
// so {y,x} is not different from {x,y}, and {x,x} is not a valid subset, unless the input also has two x's]
// {1, 2, 3} ==>  {{}, {1}, {2}, {3}, {1,2}, {1,3}, {2, 3}, {1,2,3}}

// Input: Set, as an array
// Output: Subsets in any order.

// This problem does not have pre-defined test-cases, in order to give you the flexibility of
// doing outputs in any order, and in any print format.

// Solutions:
// http://stackoverflow.com/questions/728972/finding-all-the-subsets-of-a-set OR
// http://stackoverflow.com/questions/4640034/calculating-all-of-the-subsets-of-a-set-of-numbers

// (Suggested time: 20 minutes)

export default function printSubsets(set) {
  calculateSubsets(set, [], 0, 0);
}

function calculateSubsets(set, subset, read, select) {
  if (read === set.length) {
    var result = "{";
    for (var i = 0; i < select; i += 1) {
      result += (" " + subset[i]);
    }

    result += " }";
    console.log(result);

    return;
  }

  calculateSubsets(set, subset, read + 1, select);
  subset[select] = set[read];
  calculateSubsets(set, subset, read + 1, select + 1);
}
