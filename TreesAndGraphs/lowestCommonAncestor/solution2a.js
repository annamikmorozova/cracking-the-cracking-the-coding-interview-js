// find the first common ancestor of two nodes in a tree.
// the tree is not necessarily a binary search tree, meaning the values of nodes don't matter.

// solution option (1): assuming you know the parent of a node, using additional data structure (set)
// solution option (2): assuming you know the parent of a node, without additional data structure
// solution option (3): assuming you don't know the parent of a node, using additional data structure (array)

// solution2a.js is option (1)
// explanation: starting with the direct parent of node1, traverse upward and save all ancestors of node1 in a set. then starting with the direct parent of node2 and traversing upward, compare node2's ancestors against the set. return the first ancestor that also exists in the set. if nothing exists in the set, return -1.
// O(N) time, O(N) space complexity

// edge case (1): when two nodes are not in the same tree
// edge case (2): when two nodes are the same node
// edge case (3): when one node is the top-most root (under assumption one cannot be an ancestor of itself)

class Node {
  constructor(val, parent = null, children = []) {
    this.val = val;
    this.parent = parent;
    this.children = children;
  }
}

function firstCommonAncestor1(node1, node2) {
  if (node1 === node2) return -1;
  if (!node1.parent || !node2.parent) return -1;

  const ancestorsOfNode1 = new Set();

  while (node1.parent) {
    ancestorsOfNode1.add(node1.parent);
    node1 = node1.parent;
  }

  while (node2.parent) {
    if (ancestorsOfNode1.has(node2.parent)) return node2.parent;
    node2 = node2.parent;
  }

  return -1;
}

// we'll be using the following example tree for multiple examples
const node0 = new Node(99);

const node1 = new Node(1, node0);
const node2 = new Node(2, node0);
const node3 = new Node(3, node0);
node0.children.push(node1);
node0.children.push(node2);
node0.children.push(node3);

const node4 = new Node(11, node1);
const node5 = new Node(12, node1);
const node6 = new Node(13, node1);
node1.children.push(node4);
node1.children.push(node5);
node1.children.push(node6);

const node7 = new Node(21, node2);
const node8 = new Node(22, node2);
const node9 = new Node(23, node2);
node2.children.push(node7);
node2.children.push(node8);
node2.children.push(node9);

const node10 = new Node(31, node3);
const node11 = new Node(32, node3);
const node12 = new Node(33, node3);
node3.children.push(node10);
node3.children.push(node11);
node3.children.push(node12);

const node13 = new Node(0, node4);
node4.children.push(node13);

const node14 = new Node(0, node5);
node5.children.push(node14);

const node15 = new Node(0, node8);
node8.children.push(node15);

const node16 = new Node(0, node12);
node12.children.push(node16);

const node17 = new Node(99, node13);
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
console.log(firstCommonAncestor1(node13, node9)); // node0

/*
example 2

                  99
        1          2         3
   11 12 13     21 22 23**      31 32 33
 0    0            0*                   0
99
*/

console.log("example 2");
console.log(firstCommonAncestor1(node15, node9)); // node2

/*
example 3

                  99
        1          2         3
   11 12 13     21 22 23      31 32 33
 0*   0            0                   0
99**
*/

console.log("example 3");
console.log(firstCommonAncestor1(node17, node13)); // node4

/*
example 4

                  99*
        1          2         3
   11 12 13     21 22 23      31 32 33
 0    0            0                   0
99**
*/

console.log("example 4");
console.log(firstCommonAncestor1(node0, node17)); // -1
