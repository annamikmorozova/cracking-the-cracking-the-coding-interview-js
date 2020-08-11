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
    let start = 0;
    let end = array.length - 1;
    if (array.length == 0) {
        return null;
    }

    function helper(array, start, end) {
        let mid = Math.floor((start + end) / 2);
        if (start == end) {
            return new Node(array[start]);
        }
        let node = new Node(array[mid]);
        if (mid !== start) {
            node.left = helper(array, start, mid - 1);
        }
        node.right = helper(array, mid + 1, end);
        return node;
    }
    return helper(array, start, end);
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