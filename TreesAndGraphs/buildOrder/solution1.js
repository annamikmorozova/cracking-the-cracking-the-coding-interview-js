// Topological Sorting
// Given a list of projects and a list of dependencies.
// Dependencies must be done built before projects.
// find a build order that allow the projects to be built.

let projects = ["a", "c", "d", "e", "f"];
let deps = { "a": ["d"],
          "f": ["b", "a"],
          "b": ["d"],
          "d": ["c"]
          }

// Time complexity is Big O(N);
// Space complexity is Big(N);
function helper(node, visited, stack) {
  visited.add(node);
  if (deps[node] != undefined) {
    for (let i = 0; i < deps[node].length; i++) {
      let dep_node = deps[node][i];
      if (!visited.has(dep_node)) {
        helper(dep_node, visited, stack);
      }
    }
  }
  stack.push(node);
}

// Time complexity is Big O(N);
// Space complexity is Big(N);
function topologicalSearch(deps, projects) {
  let stack = [];
  let visited = new Set();
  for (let i = 0; i < projects.length; i++) {
    let node = projects[i];
    if (!visited.has(node)) {
      helper(node, visited, stack);
    }
  }
  return stack;
}

console.log(topologicalSearch(deps, projects)); //[ 'c', 'd', 'a', 'e', 'b', 'f' ]