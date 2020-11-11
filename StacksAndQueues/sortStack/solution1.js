// write a program to sort a stack such that the smallest items are on the top. you can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). the stack supports the following operations: push, pop, peek, and isEmpty.

class Stack {
  constructor() {
    this.elements = [];
    this.length = 0;
  }

  push(val) {
    this.elements.push(val);
    this.length++;
    return this;
  }

  pop() {
    this.length--;
    return this.elements.pop();
  }

  peek() {
    if (!this.length) return "Stack is empty!";
    return this.elements[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

let myStack = new Stack();
console.log(myStack.push(1));
console.log(myStack.push(3));
console.log(myStack.push(2));
console.log(myStack.push(4));
console.log(myStack.push(5));
console.log(myStack.pop()); // 5
console.log(myStack.peek()); // 4
console.log(myStack.length); // 4
console.log(myStack.isEmpty()); // false
console.log(myStack); // [1,3,2,4]

// we want to sort myStack into [4,3,2,1]

function sortStack(stack) {
  let sorted = new Stack();

  while (!stack.isEmpty()) {
    let element = stack.pop();
    let counter = 0;

    while (sorted.peek() < element) {
      stack.push(sorted.pop());
      counter++;
    }

    sorted.push(element);

    while (counter) {
      sorted.push(stack.pop());
      counter--;
    }
  }

  return sorted;
}

console.log(sortStack(myStack)); // [4,3,2,1]
