// find the "next" node of a given node in a binary search tree. you may assume that each node has a link to its parent.
// iterative solution
// pre-order (visit current node before child nodes)
// O(N) time since we may visit all nodes, O(1) space as we don't create new variables

function Node(val, parent, left, right) {
  this.val = val;
  this.parent = parent;
  this.left = left;
  this.right = right;
}

function preOrderSuccessor(node) {
  if (!node) return undefined;

  if (node.left) {
    return node.left.val;
  } else {
    if (node.right) {
      return node.right.val;
    } else {
      let curr = node;
      while (
        curr.parent &&
        (!curr.parent.right || curr.parent.right === curr)
      ) {
        curr = curr.parent;
      }
      if (!curr.parent) return undefined;
      return curr.parent.right.val;
    }
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

console.log(preOrderSuccessor(node2)); // 1
console.log(preOrderSuccessor(node3)); // 2
console.log(preOrderSuccessor(node5)); // 8
console.log(preOrderSuccessor(node6)); // 3
console.log(preOrderSuccessor(node7)); // 10
console.log(preOrderSuccessor(node8)); // 7
console.log(preOrderSuccessor(node9)); // undefined
console.log(preOrderSuccessor(node1)); // 5
