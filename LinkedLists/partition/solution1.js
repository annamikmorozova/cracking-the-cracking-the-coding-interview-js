// Partition around x. All node values that are less than x come before x. 
// The node values equal to or larger come after.

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
// Space complexity is Big O(1) because we do not use any extra data structures;
function partition(head, x) {
    let start = null;
    let end = null;
    let startTail = null;
    let endTail = null;
    let node = head;
    while (node != null) {
        if (node.value < x) {
            if (start == null) {
                start = node;
                startTail = node;
            } else {
                startTail.next = node;
                startTail = node;
            }
        } else {
            if (end == null) {
                end = node;
                endTail = node;
            } else {
                endTail.next = node;
                endTail = node;
            }
        }
        node = node.next;
    }
    startTail.next = end;
    endTail.next = null;
    return head;
}


let head = new ListNode(3,
    new ListNode(5,
        new ListNode(8,
            new ListNode(5,
                new ListNode(10,
                    new ListNode(2,
                        new ListNode(1)
                    )
                )
            )
        )
    )
)

printValues(partition(head, 5)); // [3, 2, 1, 5, 8, 5, 10]