// unsorted Linked List
// remove duplicates

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
    console.log("ARRAY", array)
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because we make a set;
function removeDubs(head) {
    if (head == null) {
        return null;
    };
    let newSet = new Set();
    let prev = head;
    let temp;
    newSet.add(prev.value);
    while (prev.next != null) {
        temp = prev.next;
        if (newSet.has(temp.value)) {
            prev.next = temp.next;
        } else {
            newSet.add(temp.value);
            prev = prev.next;
        }
    }
    return head;
}

let head = new ListNode(12,
    new ListNode(99,
        new ListNode(99,
            new ListNode(37,
                new ListNode(32,
                    new ListNode(99)
                )
            )
        )
    )
)

let head1 = new ListNode(99,
    new ListNode(99,
        new ListNode(99,
            new ListNode(37,
                new ListNode(32,
                    new ListNode(99)
                )
            )
        )
    )
)

printValues(removeDubs(head)); // [ 12, 99, 37, 32 ]
printValues(removeDubs(head1)); // [ 99, 37, 32 ]