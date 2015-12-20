// Given a sorted dictionary of an alien language, find order of characters.

// Example-1:
// Input: words[] = {"baa", "abcd", "abca", "cab", "cad"}
// Output: Order of characters is 'b', 'd', 'a', 'c'

// Note that words are sorted and in the given language. "baa" comes before "abcd", therefore 'b'
// is before 'a' in output.

// Example-2:
// Input: words[] = {"caa", "aaa", "aab"}
// Output: Order of characters is 'c', 'a', 'b'

// Solution: http://www.geeksforgeeks.org/topological-sorting/


export default function sort(input) {
  if (!input || input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return input[0];
  }

  var graph = DAG(input);
  return tSort(graph);
}

function DAG(input) {
  var graph = {};

  for (var i = 0; i < input.length - 1; i += 1) {
    var word = input[i];

    for (var l = 0; l < word.length; l += 1) {
      if (word[l] !== input[i + 1][l]) {
        if (graph[word[l]]) {
          graph[word[l]].push(input[i + 1][l]);
        }
        else {
          graph[word[l]] = [input[i + 1][l]];
        }

        continue;
      }
    }
  }

  return graph;
}

function tSort(graph) {
  var stack = [];
  var visited = {};
  var result = [];

  function tSortUtil(v) {
    visited[v] = true;
    var adj = graph[v];

    if (adj) {
      for (var i = 0; i < adj.length; i += 1) {
        if (!visited[adj[i]]) {
          tSortUtil(adj[i]);
        }
      }
    }

    stack.push(v);
  }

  for (var v in graph) {
    if (graph.hasOwnProperty(v)) {
      if (!visited[v]) {
        tSortUtil(v);
      }
    }
  }

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result.join('');
}
