// Given two linked lists. Each node contains a single digit. 
// such that the 1st digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list.

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
    console.log("ARRAY", array);
}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because we are making a stack with recursive calls;
function addLists(l1, l2) {
  if (l1 == null && l2 == null) {
    return false;
  }
  let length1 = lengthCounter(l1);
  let length2 = lengthCounter(l2);
  let shorter = length1 < length2 ? l1 : l2;
  let longer = length1 < length2 ? l2 : l1;
  let diff = Math.abs(length1 - length2);
  let node;
  for (let i = 0; i < diff; i++) {
    node = new ListNode(0);
    node.next = shorter;
    shorter = node;
  }
  let obj = addHelper(shorter, longer);
  let last = obj.carry;
  let lastNode = obj.node;
  if (last == 1) {
    lastNode = new ListNode(1);
    lastNode.next = obj.node;
  }
  return lastNode;
}

function lengthCounter(head) {
  let counter = 0;
  while (head != null) {
    counter++;
    head = head.next;
  } 
  return counter;
}

function addHelper(l1, l2) {
  let carry = 0;
  let obj;
  let temp = null;
  if (l1.next != null) {
    obj = addHelper(l1.next, l2.next);
    carry = obj["carry"];
    temp = obj.node;
  }
  let node = new ListNode((l1.value + l2.value + carry) % 10);
  node.next = temp;
  carry = Math.floor((l1.value + l2.value + carry) / 10);
  return {carry, node};
}

let l1 = new ListNode(7,
    new ListNode(1,
        new ListNode(6, 
        )
    )
)

let l2 = new ListNode(5,
    new ListNode(9,
        new ListNode(2, 
        )
    )
)

let l3 = new ListNode(5,
    new ListNode(6,
        new ListNode(7, 
        )
    )
)

let l4 = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
             )
        )
    )
)

let l5 = new ListNode(9,
    new ListNode(9,
        new ListNode(9, 
        )
    )
)

let l6 = new ListNode(9,
    new ListNode(9,
        new ListNode(9,
            new ListNode(9, 
            )
        )
    )
)

printValues(addLists(l1, l2)); // [1, 3, 0, 8]
printValues(addLists(l3, l4)); // [1, 8, 0, 1]
printValues(addLists(l5, l6)); // [1, 0, 9, 9, 8]