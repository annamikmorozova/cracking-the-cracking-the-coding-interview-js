// find kth to last element of a singly linked list

// creates a node
function ListNode(value, next) {
    this.value = value;
    this.next = next;
}

// Time complexity is Big O(N);
// Space complexity is Big O(1);
function kthLst(head, k) {
    if (head == null) {
        return null;
    }
    let counter = 0;
    let current = head;
    while (current != null) {
        current = current.next;
        counter++;
    }
    let kth = counter - k;
    let result = head;
    for (let i = 0; i < kth; i++) {
        result = result.next;
    }
    return result.value;
}


let head = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5,
                    new ListNode(6)
                )
            )
        )
    )
)

let head1 = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)
            )
        )
    )
)

console.log(kthLst(head, 4)); // 3
console.log(kthLst(head1, 2)); // 4