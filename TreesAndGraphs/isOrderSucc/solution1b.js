//  find the "next" node (i.e., in-order successor) of a given node in a binary search tree. you may assume that each node has a link to its parent.
// iterative solution
// O(N) time since we may visit all nodes, O(1) space as we don't create new variables

function Node(val, parent, left, right) {
  this.val = val;
  this.parent = parent;
  this.left = left;
  this.right = right;
}

function successor(node) {
  if (!node) return null;

  if (node.right) {
    let curr = node.right;
    while (curr.left) {
      curr = curr.left;
    }
    return curr;
  } else {
    let curr = node;
    while (curr.parent.right === curr) {
      curr = curr.parent;
    }
    return curr.parent;
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
let node2_1 = new Node(2, node2);
node2.left = node2_1;
let node9 = new Node(9, node10);
node10.left = node9;

//              6
//        3           8
//    2      5     7      10
// 2                     9

console.log(successor(node2)); // 3
console.log(successor(node3)); // 5
console.log(successor(node5)); // 6
console.log(successor(node6)); // 7
console.log(successor(node7)); // 8
console.log(successor(node8)); // 9
console.log(successor(node9)); // 10
console.log(successor(node2_1)); // 2
