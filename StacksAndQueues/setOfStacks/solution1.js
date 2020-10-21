// Implement SetOfStacks that creates a new stack when the previous stack exceeds threshold
// push(), pop(), popAt()

// solution using array
// O(N) space, O(1) time for all operation except for one case of popAt(), where a substack becomes empty and is removed from the set (O(N) time)
class SetOfStacks {
  constructor(stackSize) {
    this.set = [];
    this.stackSize = stackSize;
    this.spaceRemaining = stackSize;
  }

  push(value) {
    if (!this.spaceRemaining || !this.set.length) {
      this.set.push([]);
      this.spaceRemaining = this.stackSize;
    }
    this.set[this.set.length - 1].push(value);
    this.spaceRemaining--;
  }

  pop() {
    const value = this.set[this.set.length - 1].pop();
    this.spaceRemaining++;
    if (!this.set[this.set.length - 1].length) {
      this.set.pop();
    }
    return value;
  }

  popAt(index) {
    if (!this.set[index]) return undefined;
    const value = this.set[index].pop();
    if (!this.set[index].length) {
      this.set = this.set.splice(index, 1);
    }
    return value;
  }
}

const example = new SetOfStacks(3);
console.log(example); // []
example.push(1);
console.log(example); // [[1]]
example.push(2);
example.push(3);
example.push(4);
example.push(5);
console.log(example); // [[1,2,3],[4,5]]
console.log(example.pop()); // 5
console.log(example); // [[1,2,3],[4]]
console.log(example.popAt(0)); // 3
console.log(example); // [[1,2],[4]]
console.log(example.pop()); // 4
console.log(example); // [[1,2]]
console.log(example.popAt(2)); // undefined
