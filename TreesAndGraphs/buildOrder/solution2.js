// given a list of projects and a list of dependencies (which is a list of pairs of projects, where the first project is dependent on the second project), find a build order that will allow the projects to be built. all of a project's dependencies must be built before the project is. if there is no valid build order, return an error.
// BFS
// O(P+D) time, O(P) space, where P is length of projects and D is length of dependencies

// turn projects into nodes, store inbound node and outgoing neighbors
// first queue nodes whose incoming is null
// queue their neighbors, if any

// directed graph node
function Node(val, inbound, neighbors, visited) {
  this.val = val;
  this.inbound = inbound;
  this.neighbors = neighbors;
  this.visited = visited;
}

// linked list to implement queue
function LLNode(val, next) {
  this.val = val;
  this.next = next;
}

class LL {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
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

function buildOrder(projects, dependencies) {
  const order = [];
  const process = new LL();
  const starters = new Set();
  const nodes = new Map();

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    nodes.set(project, new Node(project, [], [], false));
    starters.add(nodes.get(project));
  }

  for (let pair of dependencies) {
    let comesFirst = nodes.get(pair[1]);
    let comesSecond = nodes.get(pair[0]);
    comesFirst.neighbors.push(comesSecond);
    comesSecond.inbound.push(comesFirst);

    if (starters.has(comesSecond)) starters.delete(comesSecond);
  }

  for (let starter of starters) {
    process.insert(starter);
  }

  let curr = process.head;
  while (curr) {
    if (!curr.visited) {
      curr.visited = true;
      order.push(curr.val);
      for (let neighbor of curr.neighbors) {
        process.insert(neighbor);
      }
    }
    curr = curr.next;
  }

  if (order.length !== projects.length) return "error: no valid build order";

  return order;
}

let projects1 = ["a", "b", "c", "d", "e", "f"];
let dependencies1 = [
  ["d", "a"],
  ["b", "f"],
  ["d", "b"],
  ["a", "f"],
  ["c", "d"],
];

console.log(buildOrder(projects1, dependencies1)); // [ 'e', 'f', 'b', 'a', 'd', 'c' ]

let dependencies2 = [
  ["a", "b"],
  ["b", "c"],
  ["c", "a"],
]; // circular dependencies
console.log(buildOrder(projects1, dependencies2)); // 'error: no valid build order'
