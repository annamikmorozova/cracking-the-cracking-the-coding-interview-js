// check if a binary tree is a binary search tree
// recursively check if a node is within (min, max) range
// O(N) time since we may visit all nodes, O(N) space for the recursive call stack when the input tree looks like a linked list

function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isBST(root) {
  if (!node) return true;
  let flag = true;

  function isWithin(node, min, max) {
    if (node.val > max || node.val < min) flag = false;

    if (flag) {
      if (node.left) isWithin(node.left, min, node.val);
      if (node.right) isWithin(node.right, node.val, max);
    }
  }

  isWithin(root, -Infinity, Infinity);

  return flag;
}

let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

root.left = node2;
root.right = node3;
node2.left = node4;
node3.left = node5;
node3.right = node6;

//              1
//        2          3
//    4           5     6

console.log(isBST(root)); // false

let tree = new Node(
  6,
  new Node(3, new Node(2, new Node(2)), new Node(5)),
  new Node(8, new Node(7), new Node(10, new Node(9)))
);

//              6
//        3           8
//    2      5     7      10
// 2                     9

console.log(isBST(tree)); // true
