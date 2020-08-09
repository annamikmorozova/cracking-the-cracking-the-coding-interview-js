// Popular interview question
// Candy Crush problem
// Remove the same letters from a string if 3 are the same one after another
// Keep removing until you can't. Return a new string
// ex. "ABBBC" -> "AC";
// ex. "AABBBA" -> ""; 
// ex. "ABCDACCBAAABBC" -> "ABCDA"

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(el) {
        this.head = new Node(el, this.head);
    }

    pop() {
        this.head = this.head.next;
    }

    isEmpty() {
        return this.head == null;
    }

    firstTwo(current) {
        if (this.head && this.head.next) {
            if (this.head.val == this.head.next.val && current == this.head.val) {
                return true;
            }
        }
    }

    join() {
        let string = "";
        let temp = this.head;
        while (temp != null) {
            string = temp.val + string;
            temp = temp.next;
        }
        return string;
    }

}

// Time complexity is Big O(N);
// Space complexity is Big O(N) because we are using stack as a data structure;
function candyCrush(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        if (stack.firstTwo(current)) {
            stack.pop();
            stack.pop();
        } else {
            stack.push(current);
        }
    }
    return stack.join();
}

console.log(candyCrush("AABBBA")); // ""
console.log(candyCrush("ABBBA")); // "AA"
console.log(candyCrush("ABCDACCBAAABBC")); // "ABCDA"
console.log(candyCrush(" ")); // ""
console.log(candyCrush("AAAAA")); // "AA"
console.log(candyCrush("!!!!")); // "!"
console.log(candyCrush("!#$AaBAacA")); // "!#$AaBAacA"
console.log(candyCrush("!#$AaaaAAacA")); // "!#$acA"