// is the binary tree balanced? -> return true

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.right = right || null;
        this.left = left || null;
    }
}

// Time complexity is Big O(N);
// Space complexity is Big O(log N) because we are building a stack;
function isBalanced(root) {
    let min;
    let max;

    function helper(node) {
        if (node == null) {
            return {
                min: 0,
                max: 0
            }
        } else {
            let left_obj = helper(node.left);
            let right_obj = helper(node.right);
            min = Math.min(left_obj.min, right_obj.min) + 1;
            max = Math.max(left_obj.max, right_obj.max) + 1;
        }
        return {
            min,
            max
        }
    }

    let max_and_min = helper(root);
    if (Math.abs(max_and_min.max - max_and_min.min) > 1) {
        return false
    } else {
        return true;
    }
}

let tree1 = new Node(10,
    new Node(3),
    new Node(25)
);

let tree3 = new Node(5,
    new Node(3,
        null,
        new Node(4)
    ),
    new Node(15,
        new Node(13),
        new Node(25,
            null,
            new Node(31)
        )
    )
);

let tree5 = new Node(10,
    new Node(7),
    new Node(15,
        new Node(13),
        new Node(25,
            null,
            new Node(31)
        )
    )
);

console.log(isBalanced(tree1)); //true
console.log(isBalanced(tree5)); //false
console.log(isBalanced(tree3)); //false