// unsorted Linked List
// remove duplicates
// no buffer

// Time complexity is Big O(N^2);
// Space complxity Big O(1) because we do not create any extra data structure;
function removeDubs(head) {
    let current = head;
    while (current != null) {
        let runner = current;
        while (runner.next != null) {
            if (runner.next.value == current.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
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

console.log(removeDubs(head)); // 12 -> 99 -> 37 -> 32
console.log(removeDubs(head1)); // 99 -> 37 -> 32