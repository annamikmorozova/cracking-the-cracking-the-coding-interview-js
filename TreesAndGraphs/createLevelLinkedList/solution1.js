// Given a binary tree
// Create a linked list of each level of the tree
// e.g. if the depth of the tree is 5, it will be 5 linked lists

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.right = right || null;
        this.left = left || null;
    }
}

class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) 
// because we are using an array to store linked lists 
// and we also create each node in a linked list;
function createLevelLinkedList(root) {
    if (root == null) {
        return null;
    }
    let level = new ListNode(root);
    let listOfLinkedLists = [];
    while (level) {
        listOfLinkedLists.push(level);
        let newLevel = null;
        let last;
        for (let temp = level; temp != null; temp = temp.next) {
            if (temp.value.left != null) {
                if (newLevel == null) {
                    newLevel = new ListNode(temp.value.left);
                    last = newLevel;
                } else {
                    last.next = new ListNode(temp.value.left);
                    last = last.next;
                }
            }
            if (temp.value.right != null) {
                if (newLevel == null) {
                    newLevel = new ListNode(temp.value.right);
                    last = newLevel;
                } else {
                    last.next = new ListNode(temp.value.right);
                    last = last.next;
                }
            }
        }
        level = newLevel;
    }
    return listOfLinkedLists;
}



let tree1 = new Node(10,
    new Node(3,
        new Node(-1),
        new Node(5)
    ),
    new Node(25,
        new Node(22),
        new Node(30)
    )
);

let tree2 = new Node(5,
    new Node(3,
        new Node(1),
        new Node(4)
    ),
    new Node(15,
        new Node(13),
        new Node(25,
            new Node(null),
            new Node(31)
        )
    )
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

console.log(createLevelLinkedList(tree1));
console.log(createLevelLinkedList(tree2));
console.log(createLevelLinkedList(tree3));