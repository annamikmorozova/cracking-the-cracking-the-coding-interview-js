// Given a circular linked list, return the node at the beginning of the loop
// O(N) time, O(N) space

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function detectLoop(head) {
  if (!head) return -1;

  const seen = new Set();

  while (head) {
    if (!seen.has(head)) {
      seen.add(head);
    } else {
      break;
    }
    head = head.next;
  }

  return head;
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = three;

console.log(detectLoop(one)); // three
