// given a sorted array, make it a binary search tree 
// with the minimum possible depth

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because we are building nodes but
// the largest the stack gets is Big O(log N);
function minimalTree(array) {
    return createMinBST(array, 0, array.length - 1)
}

function createMinBST(array, start, end) {
    if (end < start) {
        return null;
    } else {
        let mid = Math.floor((start + end) / 2);
        let node = new Node(array[mid]);
        node.left = createMinBST(array, start, mid - 1);
        node.right = createMinBST(array, mid + 1, end);
        return node;
    }
}

console.log(minimalTree([1, 2, 3]));
//Node {
//   value: 2,
//   right: Node { value: 3, right: null, left: null },
//   left: Node { value: 1, right: null, left: null }
// }
console.log(minimalTree([-1, 3, 5, 10, 22, 25, 30]));
// Node {
//   value: 10,
//   right: Node {
//     value: 25,
//     right: Node { value: 30, right: null, left: null },
//     left: Node { value: 22, right: null, left: null }
//   },
//   left: Node {
//     value: 3,
//     right: Node { value: 5, right: null, left: null },
//     left: Node { value: -1, right: null, left: null }
//   }
// }
console.log(minimalTree([-1, -3, 5, 22, 25, 33]));
// Node {
//   value: 5,
//   right: Node {
//     value: 25,
//     right: Node { value: 33, right: null, left: null },
//     left: Node { value: 22, right: null, left: null }
//   },
//   left: Node {
//     value: -1,
//     right: Node { value: -3, right: null, left: null },
//     left: null
//   }
// }