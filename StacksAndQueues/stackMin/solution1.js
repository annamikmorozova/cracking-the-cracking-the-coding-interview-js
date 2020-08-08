// Implement stack methods: push(), pop(), min()
// Each method has to be Big O(1) time complexity

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// Space complexity of the class itseft is Big 0(N) since we are 
// using a stack as a data structure
class Stack {
    constructor() {
        this.head = null;
        this.minHead = null;
    }

    // Time complexity = Big 0(1)
    push(n) {
        this.head = new Node(n, this.head);
        if (this.minHead == null || this.head.value < this.minHead.value) {
            this.minHead = new Node(n, this.minHead)
        } else {
            this.minHead = new Node(this.minHead.value, this.minHead)
        }
    }

    // Time complexity = Big 0(1)
    pop() {
        this.head = this.head.next;
        this.minHead = this.minHead.next;
    }

    // Time complexity = Big 0(1)
    min() {
        return this.minHead.value;
    }
}

let newStack = new Stack(); //create a stack
newStack.push(9); // 9
newStack.push(7); // 9 -> 7
newStack.push(3); // 9 -> 7 -> 3
newStack.push(4); // 9 -> 7 -> 3 -> 4
console.log(newStack.min()); // 3
newStack.pop(); // 9 -> 7 -> 3
console.log(newStack.min()); // 3
newStack.pop(); // 9 -> 7
console.log(newStack.min()); // 7