function isPossibleLocation(x, y) {
    var spaceValue = 0;

    var xString = x.toString();
    var yString = y.toString();

    for (var i = 0; i < xString.length; i += 1) {
        spaceValue += Math.abs(parseInt(xString[i]));
    }

    for (var j = 0; j < yString.length; j += 1) {
        spaceValue += Math.abs(parseInt(yString[j]));
    }

    return spaceValue <= 19;
}

(function gridWalk() {
    var spaceCount = 0;
    var rightQuadrantCount = 0;
    var righ0AxisCount = 0;

    var stillMoreValidSpaces = true;
    var y = 1;

    // calculate number or spaces in right quadrant
    while (stillMoreValidSpaces) {
      var x = 1;
      while (isPossibleLocation(x, y)) {
        rightQuadrantCount += 1;
        x += 1;
      }

      // if x === 1 here then it means we've hit the top of right quad and no where to go
      stillMoreValidSpaces = (x !== 1);
      y += 1;
    }

    // calculate number spaces along right 0 axis
    var x0 = 1;
    while (isPossibleLocation(x0, 0)) {
      righ0AxisCount += 1;
      x0 += 1;
    }

    spaceCount = (rightQuadrantCount * 4) + (righ0AxisCount * 4) + 1;
    console.log(spaceCount);
})();
