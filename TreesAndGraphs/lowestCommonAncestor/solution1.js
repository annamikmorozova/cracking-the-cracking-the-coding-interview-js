// This solution assumes we are given a binary search tree
// Find common lowest ancestor of two nodes

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.right = right || null;
        this.left = left || null;
    }
}

// Time complexity is Big O(N) because it is not a balanced tree;
// Space complexity is Big O(N) since we are making a stack 
// and the worst case we would have a tree of nodes with one child each;
let lowestCommonAncestor = function (root, p, q) {
    if (root == null) {
        return null;
    }
    if (p.val < root.val && q.val > root.val) {
        return root;
    }
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};

let p = new Node(6);
p.right = new Node(8);
let n = p.right;
n.right = new Node(9);
let t = n.right;
n.left = new Node(7);
let w = n.left;
p.left = new Node(2);
let r = p.left;
r.right = new Node(4);
let l = r.right;
r.left = new Node(0);
let f = r.left;
l.right = new Node(5);
let o = l.right;
l.left = new Node(3);
let x = l.left;


console.log(lowestCommonAncestor(p, f, w).val); //6
console.log(lowestCommonAncestor(p, x, o).val); //4
console.log(lowestCommonAncestor(p, f, t).val); //6
console.log(lowestCommonAncestor(p, w, n).val); //8
console.log(lowestCommonAncestor(p, f, x).val); //2