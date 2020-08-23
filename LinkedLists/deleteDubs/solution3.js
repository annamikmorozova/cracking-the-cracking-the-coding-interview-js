"use strict";
class LNode {
    constructor(value, next) {
        this._value = value;
        this._next = next;
    }
    set next(node) {
        this._next = node;
    }
    get next() {
        return this._next;
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
class LinkedList {
    constructor(head = new LNode('head')) {
        this._head = head;
        this._tail = undefined;
    }
    addNode(node) {
        if (this.tail === undefined) {
            this.head.next = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    printList() {
        let nodePointer = this.head;
        let nodeNumber = 0;
        console.group('printing LL');
        while (nodePointer?.next !== undefined) {
            console.log(nodeNumber, ': ', nodePointer.value, '-->');
            nodePointer = nodePointer?.next;
            nodeNumber++;
        }
        console.log(nodeNumber, ': ', nodePointer?.value, '-->');
        console.log('end');
        console.groupEnd();
    }
    set head(node) {
        this._head = node;
    }
    get head() {
        return this._head;
    }
    set tail(node) {
        this._tail = node;
    }
    get tail() {
        return this._tail;
    }
    makeList(arr) {
        for (let item of arr) {
            this.addNode(new LNode(item));
        }
        return this.head;
    }
    removeDuplicates() {
        let possibleDuplicates = new Set();
        let trailing = this.head;
        let pointer = this.head;
        while (pointer.next !== undefined) {
            if (possibleDuplicates.has(pointer.value)) {
                trailing.next = pointer.next;
                pointer = trailing.next;
            }
            else {
                possibleDuplicates.add(pointer.value);
                trailing = pointer;
                pointer = pointer.next;
            }
        }
        if (possibleDuplicates.has(trailing.value)) {
            trailing.next = undefined;
        }
    }
}
let myList = new LinkedList(new LNode('start'));
myList.makeList(['a', 'a', 'b', 'b', '1', 'd', 'e', 'e', 'e', 'w', 'ac', 'ac']);
myList.removeDuplicates();
myList.printList(); //'a', 'b', '1', 'd', 'e', 'w', 'ac'
let emptyList = new LinkedList();
emptyList.removeDuplicates();
emptyList.printList(); //'head'
let allCopies = new LinkedList();
allCopies.makeList(['a', 'a', 'a', 'a', 'a', 'a']);
allCopies.removeDuplicates();
allCopies.printList(); //'a'