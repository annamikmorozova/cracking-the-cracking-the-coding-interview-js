// Check if a linked list is a palindrome
// O(N) time, O(1) space

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function isPalin(head) {
  if (!head || !head.next) return head;
  let isPalin = true;

  function backOut(tail) {
    if (!tail) return true;

    backOut(tail.next);

    if (tail.val != head.val) {
      isPalin = false;
    }

    head = head.next;
  }

  backOut(head);
  return isPalin;
}

const example1 = new ListNode(
  "a",
  new ListNode("b", new ListNode("c", new ListNode("b", new ListNode("a"))))
);

console.log(isPalin(example1)); // true

const example2 = new ListNode(
  "a",
  new ListNode("b", new ListNode("c", new ListNode("c", new ListNode("a"))))
);

console.log(isPalin(example2)); // false
