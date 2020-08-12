// if a binary tree is a binary search tree -> return true

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.right = right || null;
        this.left = left || null;
    }
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because we are building a stack and 
// the worst case is if a tree looks like a linked list;

function isBinarySearchTree2(root) {
    let last = null;

    function helper(root) {
        if (root == null) {
            return true;
        }
        if (!helper(root.left)) {
            return false;
        }
        if (last != null && root.value <= last) {
            return false;
        }
        last = root.value;
        if (!helper(root.right)) {
            return false;
        }
        return true;
    }
    return helper(root);
}


let tree1 = new Node(10,
    new Node(3),
   new Node(25)
);

let tree2 = new Node(10);

let tree3 = new Node(10,
    new Node(8,
        new Node(5),
        new Node(11)
    ),
    new Node(15,
        new Node(13),
        new Node(35)
    )
);

let tree4 = new Node(10,
  new Node(3),
  null
);

console.log(isBinarySearchTree2(tree1)); //true
console.log(isBinarySearchTree2(tree2)); //true
console.log(isBinarySearchTree2(tree3)); //false
console.log(isBinarySearchTree2(tree4)); //true