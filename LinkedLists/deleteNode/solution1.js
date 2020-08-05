//delete a node from a linked list while you do not have access to the linked list
// do not return the list

// creates a node
function ListNode(value, next) {
    this.value = value;
    this.next = next;
}

// Time Complexity is Big O(N);
// Space Complexity is Big O(1);
function deleteNode(n) {
  if (n == null || n.next == null) {
    return false;
  }
  let next = n.next
  n.value = next.value;
  n.next = n.next.next;
  return true;
}

let n = new ListNode("b", 
    new ListNode("c", new ListNode("d", null))
)

console.log(deleteNode(n));