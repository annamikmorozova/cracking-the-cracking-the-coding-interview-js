// given a binary tree, create a linked list of all the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists)
// O(N) time as we visit each node once, O(N) space since we create each linked list node for each node, where N is number of nodes in the input tree

function LLNode(val, next) {
  this.val = val;
  this.next = next;
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }
}

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function listDepths(root) {
  let res = [];

  function generateLL(treeNode, d) {
    if (!res[d]) {
      res[d] = new LL();
    }
    let listNode = new LLNode(treeNode);
    res[d].insert(listNode);

    if (treeNode.left) {
      generateLL(treeNode.left, d + 1);
    }
    if (treeNode.right) {
      generateLL(treeNode.right, d + 1);
    }
  }

  generateLL(root, 0);

  function print(list) {
    for (let i = 0; i < list.length; i++) {
      let printList = [];
      let curr = list[i].head;
      while (curr) {
        printList.push(curr.val.val);
        curr = curr.next;
      }
      console.log("depth: ", i);
      console.log(printList);
    }
  }

  print(res);

  return res;
}

let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);
let node8 = new TreeNode(8);
let node9 = new TreeNode(9);
let node10 = new TreeNode(10);

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

listDepths(root); // [[1], [2,3], [4,6,7], [5,8,9,10]]
