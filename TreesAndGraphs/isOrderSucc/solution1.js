// find the "next" node in order successor of a given node in a binary search tree. 
// Assume that each node has a link to its parent 

class Node {
    constructor(value, left, right, parent) {
        this.value = value;
        this.right = right || null;
        this.left = left || null;
        this.parent = parent;
    }
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because we are building a stack and 
// the worst case is if a tree looks like a linked list;
function inOrderSucc(node) {
    let temp = node;
    if (node == null) {
        return null;
    }
    if (temp.right != null) {
        return findMostLeft(temp.right);
    } else {
        while (temp.value > temp.parent.value) {
            temp = temp.parent;
        }
        return temp.parent;
    }
}

function findMostLeft(node) {
    let temp = node;
    if (node.left == null) {
        return node;
    }
    return findMostLeft(temp.left);
}

let a = new Node(3);
let b = new Node(4);
a.right = b;
b.parent = a;

let c = new Node(5);
let d = new Node(7);
let e = new Node(6);
c.right = d;
d.parent = c;
d.left = e;
e.parent = d;

let f = new Node(10);
let g = new Node(7);
let l = new Node(17);
let m = new Node(3);
let n = new Node(9);
let w = new Node(25);
let r = new Node(30);
let p = new Node(8);
f.right = l;
f.left = g;
l.parent = f;
g.parent = f;
g.right = n;
g.left = m;
n.parent = g;
m.parent = g;
n.left = p;
p.parent = n;
l.right = w;
w.parent = l;
w.right = r;
r.parent = w;

console.log(inOrderSucc(a).value); //4
console.log(inOrderSucc(c).value); //6
console.log(inOrderSucc(w).value); //30
console.log(inOrderSucc(f).value); //17
console.log(inOrderSucc(n).value); //10
console.log(inOrderSucc(p).value); //9
console.log(inOrderSucc(m).value); //7