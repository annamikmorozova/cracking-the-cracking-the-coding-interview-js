// find out whether there is a route between two nodes
// breadth first search using queue (implemented with linked list)
// O(N) time, O(N) space, N is number of nodes in the graph

function GraphNode(val, adjacent) {
  this.val = val;
  this.adjacent = adjacent;
  this.visited = false;
}

function LLNode(val, next) {
  this.val = val;
  this.next = next;
}

class LL {
  constructor(head) {
    this.head = head;
    this.tail = head;
  }

  insert(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }
}

function routeBetweenNodes(node1, node2) {
  let visitNext = new LL(new LLNode(node1));
  let current = visitNext.head;

  while (current) {
    let currGraphNode = current.val;
    if (currGraphNode === node2) return true;

    for (let n of currGraphNode.adjacent) {
      visitNext.insert(new LLNode(n));
    }

    current = current.next;
  }

  return false;
}

let node1 = new GraphNode(1, []);
let node2 = new GraphNode(2, []);
let node3 = new GraphNode(3, []);
let node4 = new GraphNode(4, []);
let node5 = new GraphNode(5, []);
let node6 = new GraphNode(6, []);
let node7 = new GraphNode(7, []);
let node8 = new GraphNode(8, []);
let node9 = new GraphNode(9, []);

node1.adjacent.push(node3);
node1.adjacent.push(node4);
node3.adjacent.push(node2);
node4.adjacent.push(node3);
node4.adjacent.push(node5);
node4.adjacent.push(node6);
node6.adjacent.push(node3);
node6.adjacent.push(node7);
node7.adjacent.push(node8);

console.log(routeBetweenNodes(node1, node8)); // true
console.log(routeBetweenNodes(node1, node2)); // true
console.log(routeBetweenNodes(node1, node9)); // false
console.log(routeBetweenNodes(node3, node4)); // false
