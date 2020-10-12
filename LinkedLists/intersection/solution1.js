// Check if two singly linked lists intersect (by reference), return the intersecting node
// O(N+M) time, O(N) space where N, M are the size of the two linked lists

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function intersection(head1, head2) {
  if (!head1 || !head2) return -1;

  const seen = new Set();

  while (head1) {
    seen.add(head1);
    head1 = head1.next;
  }

  while (head2) {
    if (seen.has(head2)) return head2;
    head2 = head2.next;
  }

  return -1;
}

const head1 = new ListNode(1);
const head2 = new ListNode("a", new ListNode("b", new ListNode("c")));

const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);
two.next = three;
three.next = four;
four.next = five;

head1.next = two;
head2.next.next.next = two;

console.log(intersection(head1, head2)); // 2
