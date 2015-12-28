// Calculate the diameter of a tree (not necessarily a binary tree).
// Diameter is the longest path between two leaves of a tree.
// A path is the sum total of all distances (weights) attached to all edges between two nodes.

// In the examples below, a tree is represented in a specific notation.

// e.g. {"{0,1,{5,0}}", 0} means:
// * it starts with root (0), which has one (1) child, which will follow in braces.
// * Inside the braces, it says that the distance (weight) of reaching that first child is 5 and
// * that there are no more children after that (0)

// You can represent the tree however you like. This is just one convenient way:

// Examples:
//  	// One node - no diameter
//  	{"{0,0}", 0},
//  	// One leaf - no diameter
//  	{"{0,1,{5,0}}", 0},
//  	// Still one leaf - no diameter
//  	{"{0,1,{5,1,{4,1,{7,0}}}}", 0},
//  	// The diameter of the first child is the diameter of the tree
//  	{"{0,1,{5,2,{8,0},{7,0}}}", 15},
//  	// The diameter of the last child is the diameter of the tree
//  	{"{0,3,{1,2,{5,0},{7,0}},{1,2,{6,0},{5,0}},{1,2,{10,0},{9,0}}}", 19},
//  	// Now the diameter is between a leaf in the first child and a leaf in the third child
//  	{"{0,3,{5,2,{8,0},{7,0}},{5,2,{9,0},{8,0}},{5,2,{10,0},{9,0}}}", 29},
//  	};

// Test-cases: Please hard-code inputs and present output to STDOUT. Ignore the failing dummy test-case.

// Solution: http://techieme.in/tree-diameter/
// OR http://www.geeksforgeeks.org/diameter-of-a-binary-tree/

// (Suggested time: 30 minutes, because you have seen the problem in class; 45 otherwise)

export default function diameterOfTree(tree) {
  if (!tree) {
    return -1;
  }

  return diameter(tree).diameter;
}

function diameter(node) {
  var returnValue = {
    "diameter": 0,
    "distanceToMostDistantLeaf": 0
  }

  if (node.children.length === 0) {
    returnValue.distanceToMostDistantLeaf = node.distanceToFather;
    return returnValue;
  }

  returnValue.diameter = -1;
  var maxDistance1 = 0, maxDistance2 = 0;

  for (var i = 0; i < node.children.length; i += 1) {
    var r = diameter(node.children[i]);
    returnValue.diameter = Math.max(returnValue.diameter, r.diameter);

    if (r.distanceToMostDistantLeaf > maxDistance1) {
      maxDistance2 = maxDistance1;
      maxDistance1 = r.distanceToMostDistantLeaf;
    }
    else if (r.distanceToMostDistantLeaf > maxDistance2) {
      maxDistance2 = r.distanceToMostDistantLeaf;
    }
  }

  returnValue.distanceToMostDistantLeaf = node.distanceToFather + maxDistance1;
  returnValue.diameter = Math.max(returnValue.diameter, maxDistance1 + maxDistance2);
  return returnValue;
}
