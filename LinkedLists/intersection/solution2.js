// Check if two singly linked lists intersect (by reference), return the intersecting node
// O(N+M) time, O(1) space where N, M are the size of the two linked lists

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function intersection(head1, head2) {
  if (!head1 || !head2) return -1;

  let n = 0;
  let m = 0;
  let h1Copy = head1;
  let h2Copy = head2;

  while (h1Copy) {
    n++;
    h1Copy = h1Copy.next;
  }

  while (h2Copy) {
    m++;
    h2Copy = h2Copy.next;
  }

  let longerList = n >= m ? head1 : head2;
  let shorterList = n >= m ? head2 : head1;
  let diff = Math.abs(n - m);

  while (diff) {
    longerList = longerList.next;
    diff--;
  }

  while (longerList) {
    if (longerList === shorterList) return longerList;
    longerList = longerList.next;
    shorterList = shorterList.next;
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
