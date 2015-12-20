// Given a directed graph, check whether there is a cycle in it.

// * There can be multiple cycles
// * We don't need to print all the cycles. Just return a boolean true/false if there
// is/is-not at least one cycle respectively

// Solution: http://www.geeksforgeeks.org/detect-cycle-in-a-graph/

// Suggested time: 45 minutes max.

export default function detectCycle(graph) {
  for (var i = 0; i < graph.length; i += 1) {
    if (isCycle(graph, i, [], [])) {
      return true;
    }
  }

  return false;
}

function isCycle(graph, start, visitedArray, currentPathArray) {
  var visited = visitedArray;
  var currentPath = currentPathArray;

  function cycleUtil(graph, start) {
    if (visited[start] && currentPath[start]) {
      return true;
    }

    visited[start] = true;
    currentPath[start] = true;

    var adj = graph[start];

    if (adj) {
      for (var i = 0; i < adj.length; i += 1) {
        if (cycleUtil(graph, adj[i])) {
          return true;
        }
      }
    }

    currentPath[start] = false;
    return false;
  }

  return cycleUtil(graph, start);
}
