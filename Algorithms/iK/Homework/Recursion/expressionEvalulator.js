// Given a string of integers as input, put between each pair of digits, one of {“”, “*”, “+”}
// such that the expression you get will evaluate to K (a number also given as input).
// Putting an empty string ("") between two numbers means, that the numbers are joined to
// form a new number (e.g. 1 "" 2 = 12)

// Order of integers given as input needs to remain the same.

// Input:
// 1. String of positive integers
// 2. Target K

// Output:
// All possible strings that evaluate to K

// e.g.
// If the input string is "222", and your target (K) is "24", two possible answers are:

// 1. 22+2 (Here, we put the "" operator in between first two 2s and then put a plus between the last two)
// 2. 2+22 (Here, we put the plus operator between first two 2s and then put the "" operator between the last two)

// Realize that precedence of the operators matters. In higher to lower precedence:
// 1. Join ("")
// 2. Multiplication (*)
// 3. Addition (+)

// Solution: https://github.com/epibook/epibook.github.io/blob/master/solutions/java/src/main/java/com/epi/AddOperatorsInString.java
// (There is no real explanation of the solution anywhere, but looking at code should be very instructive. This is the canonical solution by the author of this problem).

// (Suggested time: 45 minutes)

export default function expressionCreator(strDigits, iK) {
  return create(strDigits, iK, 0, 0, [], [], []);
}

function create(strDigits, iK, currentItem, offset, operands, operators, answer) {
  currentItem = currentItem * 10 + parseInt(strDigits[offset]);

  if (offset === strDigits.length - 1) {
    operands.push(currentItem);

    if (calculateValue(operands, operators) === iK) { // Match
      var result = [];

      for (var i = 0; i < operands.length; i += 1) {
        result.push(operands[i]);

        if (i < operators.length) {
          result.push(operators[i]);
        }
      }

      answer.push(result.join('') + "=" + iK);
    }

    operands.length = operands.length - 1; // remove last item
    return answer;
  }

  // ""
  answer = create(strDigits, iK, currentItem, offset + 1, operands, operators, answer);

  // "*"
  operands.push(currentItem);
  operators.push('*');

  answer = create(strDigits, iK, 0, offset + 1, operands, operators, answer);

  operands.length = operands.length - 1; // remove last item
  operators.length = operators.length - 1; // remove last item

  // "+"
  operands.push(currentItem);
  operators.push('+');

  answer = create(strDigits, iK, 0, offset + 1, operands, operators, answer);

  operands.length = operands.length - 1; // remove last item
  operators.length = operators.length - 1; // remove last item

  return answer;
}

function calculateValue(operands, operators) {
  // return value of currentStr
  var operandStack = [];
  var operandIndex = 0;

  operandStack.push(operands[operandIndex]);
  operandIndex += 1;

  for (var i = 0; i < operators.length; i += 1) {
    if (operators[i] === '*') {
      var newOperand = operandStack[operandStack.length - 1] * operands[operandIndex];
      operandStack[operandStack.length - 1] = newOperand;
    }
    else {
      operandStack.push(operands[operandIndex]);
    }

    operandIndex += 1;
  }

  var result = 0;
  while (operandStack.length > 0) {
    result += operandStack[operandStack.length - 1];
    operandStack.length = operandStack.length - 1;
  }

  return result;
}
