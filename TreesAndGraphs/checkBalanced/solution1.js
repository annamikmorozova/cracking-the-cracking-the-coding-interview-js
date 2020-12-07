// check if a binary tree is balanced. a balanced tree here is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
// O(N) time since we may visit all nodes, O(log N) space due to recursive call stacks

function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isBalanced(root) {
  let heights = new Set();
  let flag = true;

  function getHeight(node, h) {
    if (!node) return;

    if (!node.left || !node.right) {
      heights.add(h);
      if (heights.size > 2) flag = false;
    }

    if (flag) {
      getHeight(node.left, h + 1);
      getHeight(node.right, h + 1);
    }
  }

  getHeight(root, 0);

  return flag;
}

let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
let node8 = new Node(8);
let node9 = new Node(9);
let node10 = new Node(10);

root.left = node2;
root.right = node3;
node2.left = node4;
node4.right = node5;
node3.left = node6;
node3.right = node7;
node6.left = node8;
node7.left = node9;
node7.right = node10;

//              1
//        2          3
//    4           6     7
//      5       8     9   10

console.log(isBalanced(root)); // false

let node11 = new Node(11);
node2.right = node11;

console.log(isBalanced(root)); // true
