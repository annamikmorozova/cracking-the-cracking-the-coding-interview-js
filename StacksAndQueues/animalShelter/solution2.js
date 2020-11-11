// animal shelter operates on FIFO
// people must adopt the "oldest" (based on arrival time) of all animals at the shelter, or can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type)
// create a data structure to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, dequeueCat

class LLNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      this.tail = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  remove(node) {
    let prev;
    let curr = this.head;
    while (curr) {
      if (curr === node) {
        if (!prev) {
          this.head = this.head.next;
        } else {
          let found = curr;
          prev.next = curr.next;
          return found;
        }
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
    return "Node not found!";
  }
}

class AnimalShelter {
  constructor() {
    this.animals = new LinkedList();
  }

  enqueue(animal) {
    this.animals.insert(animal);
  }

  dequeueAny() {
    if (this.animals.head) {
      let free = this.animals.head;
      this.animals.head = this.animals.head.next;
      return free;
    } else {
      ("No animal is currently available!");
    }
  }

  dequeueDog() {
    let curr = this.animals.head;
    while (curr) {
      if (curr.val.type === "dog") {
        let free = curr;
        this.animals.remove(curr);
        return free;
      } else {
        curr = curr.next;
      }
    }
    return "No dog is currently available!";
  }

  dequeueCat() {
    let curr = this.animals.head;
    while (curr) {
      if (curr.val.type === "cat") {
        let free = curr;
        this.animals.remove(curr);
        return free;
      } else {
        curr = curr.next;
      }
    }
    return "No cat is currently available!";
  }
}

let shelter = new AnimalShelter();

let dog1 = new LLNode({ name: "dog1", type: "dog" });
let dog2 = new LLNode({ name: "dog2", type: "dog" });
let dog3 = new LLNode({ name: "dog3", type: "dog" });
let dog4 = new LLNode({ name: "dog4", type: "dog" });
let dog5 = new LLNode({ name: "dog5", type: "dog" });

let cat1 = new LLNode({ name: "cat1", type: "cat" });
let cat2 = new LLNode({ name: "cat2", type: "cat" });

shelter.enqueue(dog1);
shelter.enqueue(cat1);
shelter.enqueue(dog2);
shelter.enqueue(dog3);
shelter.enqueue(dog4);
shelter.enqueue(dog5);
shelter.enqueue(cat2);

console.log(shelter.dequeueAny()); // dog1
console.log(shelter.dequeueDog()); // dog2
console.log(shelter.dequeueAny()); // cat1
console.log(shelter.dequeueCat()); // cat2
console.log(shelter.dequeueCat()); // 'No cat is currently available!'
console.log(shelter.dequeueAny()); // dog3
