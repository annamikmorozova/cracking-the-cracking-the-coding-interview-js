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
function isBinarySearchTree(root) {

    function helper(root) {
        let right_obj;
        let left_obj;
        if (root.right == null && root.left == null) {
            return {
                min: root.value,
                max: root.value,
                isBST: true
            };
        }
        if (root.left != null) {
            left_obj = helper(root.left);
            if (left_obj.max >= root.value) {
                return {
                    min: root.value,
                    max: root.value,
                    isBST: false
                };
            }
        }
        if (root.right != null) {
            right_obj = helper(root.right);
            if (right_obj.min <= root.value) {
                return {
                    min: root.value,
                    max: root.value,
                    isBST: false
                };
            }
        }
        return {
            max: right_obj ? right_obj.max : root.value,
            min: left_obj ? left_obj.min : root.value,
            isBST: (!right_obj || right_obj.isBST) && (!left_obj || left_obj.isBST)
        }
    }
    return helper(root).isBST;
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

console.log(isBinarySearchTree(tree1)); //true
console.log(isBinarySearchTree(tree2)); //true
console.log(isBinarySearchTree(tree3)); //false
console.log(isBinarySearchTree(tree4)); //true