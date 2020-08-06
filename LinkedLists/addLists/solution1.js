// Given two linked lists. Each node contains a single digit. 
// The digits are stored in reverse order, 
// such that the 1st digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list.

// creates a node
function ListNode(value, next) {
    this.value = value;
    this.next = next;
}

// helper function to print all values in the node
function printValues(head) {
    let array = [];
    let temp = head;
    while (temp != null) {
        array.push(temp.value);
        temp = temp.next;
    }
    console.log("ARRAY", array);
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because are making a stack with recursive calls;
function addLists(l1, l2) {
    if (l1 == null && l2 == null && carry == 0) {
        return null;
    }
    addListsHelper(l1, l2, 0);
}

function addListsHelper(l1, l2, carry) {
    let value = carry;
    value += l1 ? l1.value : 0;
    value += l2 ? l2.value : 0;
    const node = new ListNode(value % 10);
    node.next = addLists(
        l1 ? l1.next : null,
        l2 ? l2.next : null,
        value >= 10 ? 1 : 0)
    return node;
}

let l1 = new ListNode(7,
    new ListNode(1,
        new ListNode(6, 
        )
    )
)

let l2 = new ListNode(5,
    new ListNode(9,
        new ListNode(2, 
        )
    )
)

let l3 = new ListNode(5,
    new ListNode(4,
        new ListNode(9, 
        )
    )
)

let l4 = new ListNode(5,
    new ListNode(9,
        new ListNode(2,
            new ListNode(3,
             )
        )
    )
)

let l5 = new ListNode(9,
    new ListNode(9,
        new ListNode(9, 
        )
    )
)

let l6 = new ListNode(9,
    new ListNode(9,
        new ListNode(9,
            new ListNode(9, 
            )
        )
    )
)

printValues(addLists(l1, l2)); // [2, 1, 9]
printValues(addLists(l3, l4)); // [0, 4, 2, 4]
printValues(addLists(l5, l6)); // [8, 9, 9, 0, 1]