// find kth to last element of a singly linked list

// creates a node
function ListNode(value, next) {
    this.value = value;
    this.next = next;
}


// Time complexity is Big O(N);
// Space complexity is Big O(N) because we are collecting a stack of recursive calls;
function kthLastRecursion(head, k) {
  if (head == null) {
    return 0;
  }
  let index = kthLastRecursion(head.next, k) + 1;
  if (index == k) {
    return k;
  }
  return index;
}

let head = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)
            )
        )
    )
)

console.log(kthLastRecursion(head, 1)); //5