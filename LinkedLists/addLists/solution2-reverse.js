// Given two linked lists. Each node contains a single digit.
// The digits are stored in reverse order,
// such that the 1st digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

// iterative solution
// O(N) time for two lists with lengths N and M where N >= M
// O(N) space as we're creating a new list

// when digits are stored in reverse order
function sumLists(l1, l2) {
  let res = null;
  let rollover = 0;
  let node1 = l1;
  let node2 = l2;
  while (node1 || node2 || rollover) {
    if (!node1) node1 = { val: 0, next: null };
    if (!node2) node2 = { val: 0, next: null };

    let sum = node1.val + node2.val + rollover;
    rollover = Math.floor(sum / 10);
    sum %= 10;

    const newNode = new ListNode(sum);
    if (res) {
      newNode.next = res;
    }
    res = newNode;

    node1 = node1.next;
    node2 = node2.next;
  }
  return res;
}

const example1L1 = new ListNode(7, new ListNode(1, new ListNode(6)));

const example1L2 = new ListNode(5, new ListNode(9, new ListNode(2)));

console.log(sumLists(example1L1, example1L2)); // 9-1-2

const example2L1 = new ListNode(7);
const example2L2 = new ListNode(5);

console.log(sumLists(example2L1, example2L2)); // 1-2

console.log(sumLists(null, example2L2)); // 5
