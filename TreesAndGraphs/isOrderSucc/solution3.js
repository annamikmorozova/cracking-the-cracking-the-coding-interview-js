// find the "next" node of a given node in a binary search tree. you may assume that each node has a link to its parent.
// post-order (visit before child nodes before current node)
// O(1) time since we only check direct parent and sibling, O(1) space as we don't create new variables

function Node(val, parent, left, right) {
  this.val = val;
  this.parent = parent;
  this.left = left;
  this.right = right;
}

function postOrderSuccessor(node) {
  if (!node || !node.parent) return undefined;

  if (node.parent.left === node) {
    if (node.parent.right) {
      return node.parent.right.val;
    }
    return node.parent.val;
  }

  if (node.parent.right === node) {
    return node.parent.val;
  }
}

let node6 = new Node(6, null);
let node3 = new Node(3, node6);
node6.left = node3;
let node8 = new Node(8, node6);
node6.right = node8;
let node2 = new Node(2, node3);
node3.left = node2;
let node5 = new Node(5, node3);
node3.right = node5;
let node7 = new Node(7, node8);
node8.left = node7;
let node10 = new Node(10, node8);
node8.right = node10;
let node1 = new Node(1, node2);
node2.left = node1;
let node9 = new Node(9, node10);
node10.left = node9;

//              6
//        3           8
//    2      5     7      10
// 1                     9

console.log(postOrderSuccessor(node2)); // 5
console.log(postOrderSuccessor(node3)); // 8
console.log(postOrderSuccessor(node5)); // 3
console.log(postOrderSuccessor(node6)); // undefined
console.log(postOrderSuccessor(node7)); // 10
console.log(postOrderSuccessor(node8)); // 6
console.log(postOrderSuccessor(node9)); // 10
console.log(postOrderSuccessor(node1)); // 2
