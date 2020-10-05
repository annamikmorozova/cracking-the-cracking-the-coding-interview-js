// find the first common ancestor of two nodes in a tree.
// the tree is not necessarily a binary search tree, meaning the values of nodes don't matter.

// solution option (1): assuming you know the parent of a node, using additional data structure (set)
// solution option (2): assuming you know the parent of a node, without additional data structure
// solution option (3): assuming you don't know the parent of a node, using additional data structure (array)

// solution3.js is option (3)
// explanation: starting from the top-most root, traverse the whole tree (dfs) to find the two nodes; store the ancestral path from root to each node in an array. the rest is similar to option (2). pop() the longer array until it reaches the same length as the shorter array, then pop() both arrays until you find the same ancestor.
// O(N) time, O(N) space complexity

// edge case (1): when two nodes are not in the same tree
// edge case (2): when two nodes are the same node
// edge case (3): when one node is the top-most root (under assumption one cannot be an ancestor of itself)

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

function firstCommonAncestor3(root, node1, node2) {
  if (node1 === node2) return -1;
  if (node1 === root || node2 === root) return -1;

  let pathFound = false;

  // find path from root to each node
  function findPath(root, node) {
    if (!root.children.length) {
      return [];
    }

    // for easy readability during test, change line 37 to
    // let path = [root.val];
    let path = [root];

    for (let child of root.children) {
      if (child === node) {
        pathFound = true;
        return path;
      }

      let currentPath = path.slice();
      path = [...path, ...findPath(child, node)];

      if (pathFound) break;
      path = currentPath;
    }

    return path;
  }

  let pathToNode1 = findPath(root, node1);
  pathFound = false;
  let pathToNode2 = findPath(root, node2);

  // if two paths' lengths differ, make them the same
  if (pathToNode1.length !== pathToNode2.length) {
    let shorterPath =
      pathToNode1.length > pathToNode2.length ? pathToNode2 : pathToNode1;
    let longerPath =
      pathToNode1.length > pathToNode2.length ? pathToNode1 : pathToNode2;

    while (longerPath.length > shorterPath.length) {
      longerPath.pop();
    }

    pathToNode1 = shorterPath;
    pathToNode2 = longerPath;
  }

  // compare each node's ancestors from bottom up
  while (pathToNode1.length) {
    let ancestor1 = pathToNode1.pop();
    let ancestor2 = pathToNode2.pop();
    if (ancestor1 === ancestor2) return ancestor1;
  }

  // reached the top-most root and did not find common ancestor
  return -1;
}

// we'll be using the following tree for multiple examples
const node0 = new Node(99);

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node0.children.push(node1);
node0.children.push(node2);
node0.children.push(node3);

const node4 = new Node(11);
const node5 = new Node(12);
const node6 = new Node(13);
node1.children.push(node4);
node1.children.push(node5);
node1.children.push(node6);

const node7 = new Node(21);
const node8 = new Node(22);
const node9 = new Node(23);
node2.children.push(node7);
node2.children.push(node8);
node2.children.push(node9);

const node10 = new Node(31);
const node11 = new Node(32);
const node12 = new Node(33);
node3.children.push(node10);
node3.children.push(node11);
node3.children.push(node12);

const node13 = new Node(0);
node4.children.push(node13);

const node14 = new Node(0);
node5.children.push(node14);

const node15 = new Node(0);
node8.children.push(node15);

const node16 = new Node(0);
node12.children.push(node16);

const node17 = new Node(99);
node13.children.push(node17);

/*
example 1: * means node1, ** means node2

                  99
        1          2         3
   11 12 13     21 22 23**      31 32 33
 0*   0            0                   0
99
*/

console.log("example 1");
console.log(firstCommonAncestor3(node0, node13, node9)); // node0

/*
example 2

                  99
        1          2         3
   11 12 13     21 22 23**      31 32 33
 0    0            0*                   0
99
*/

console.log("example 2");
console.log(firstCommonAncestor3(node0, node15, node9)); // node2

/*
example 3

                  99
        1          2         3
   11 12 13     21 22 23      31 32 33
 0*   0            0                   0
99**
*/

console.log("example 3");
console.log(firstCommonAncestor3(node0, node17, node13)); // node4

/*
example 4

                  99*
        1          2         3
   11 12 13     21 22 23      31 32 33
 0    0            0                   0
99**
*/

console.log("example 4");
console.log(firstCommonAncestor3(node0, node0, node17)); // -1
