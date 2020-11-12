// implement a MyQueue class using two stacks
// use one stack for enqueueing, use another stack for dequeueing
// O(N) operation for all methods except isEmpty, where N is the length of the queue

class MyQueue {
  constructor() {
    this.pushStack = [];
    this.shiftStack = [];
    this.length = 0;
  }

  enqueue(val) {
    while (this.shiftStack.length) {
      let tail = this.shiftStack.pop();
      this.pushStack.push(tail);
    }
    this.pushStack.push(val);
    this.length++;
    return this;
  }

  dequeue() {
    while (this.pushStack.length) {
      let tail = this.pushStack.pop();
      this.shiftStack.push(tail);
    }
    this.length--;
    return this.shiftStack.pop();
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    while (this.shiftStack.length) {
      let tail = this.shiftStack.pop();
      this.pushStack.push(tail);
    }
    return this.pushStack[0];
  }
}

const myQ = new MyQueue();
console.log(myQ.isEmpty()); // true
console.log(myQ.enqueue(1));
console.log(myQ.enqueue(2));
console.log(myQ.enqueue(3));
console.log(myQ.enqueue(4));
console.log(myQ.enqueue(5));
console.log(myQ.peek()); // 1
console.log(myQ.length); // 5
console.log(myQ.dequeue()); // 1
console.log(myQ.dequeue()); // 2
console.log(myQ.dequeue()); // 3
console.log(myQ.peek()); // 4
console.log(myQ.length); // 2
