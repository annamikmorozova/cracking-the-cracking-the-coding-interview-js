// Animal shelter
// FIFO (queue)
// cats and dogs
// can adopt the oldest (by arrival) or 
// choose in between cat and dog and then will get the oldest type (by arrival)

class Pet {
    constructor(name, next) {
        this.name = name;
        this.next = next;
        this.prev = null;
        this.acNext = null;
        this.acPRev = null;
    }
}

class AdoptionCenter {
    constructor() {
        this.DHead = null;
        this.CHead = null;
        this.ACHead = null;
        this.DTail = null;
        this.CTail = null;
        this.ACTail = null;
    }

    printAnimals() {
        let array = [];
        let temp = this.ACHead;
        while (temp != null) {
            array.push(temp.name);
            temp = temp.acPRev;
        }
        console.log("ANIMALS", array);
    }

    printDogs() {
        let array = [];
        let temp = this.DHead;
        while (temp != null) {
            array.push(temp.name);
            temp = temp.prev;
        }
        console.log("DOGS", array);
    }

    printCats() {
        let array = [];
        let temp = this.CHead;
        while (temp != null) {
            array.push(temp.name);
            temp = temp.prev;
        }
        console.log("CATS", array);
    }

    // Time complexity is Big O(1);
    // Space complexity is Big O(1);
    dogQueue(name) {
        let dog = new Pet(name, this.DTail);
        if (this.DHead == null) {
            this.DTail = dog;
            this.DHead = dog;
        } else {
            this.DTail.prev = dog;
            dog.next = this.DTail;
            this.DTail = dog;
        }
        return dog;
    }

    // Time complexity is Big O(1);
    // Space complexity is Big O(1);
    catQueue(name) {
        let cat = new Pet(name, this.CTail);
        if (this.CHead == null) {
            this.CTail = cat;
            this.CHead = cat;
        } else {
            this.CTail.prev = cat;
            cat.next = this.CTail;
            this.CTail = cat;
        }
        return cat;
    }

    // Time complexity is Big O(1);
    // Space complexity is Big O(1);
    enqueue(name, type) {
        let pet;
        if (type == "dog") {
            pet = this.dogQueue(name);
        } else {
            pet = this.catQueue(name);
        }
        if (this.ACHead == null) {
            this.ACTail = pet;
            this.ACHead = pet;
        } else {
            pet.acNext = this.ACTail;
            this.ACTail.acPRev = pet;
            this.ACTail = pet;
        }
    }

    // Time complexity is Big O(1);
    // Space complexity is Big O(1);
    dequeueDog() {
        let adopted = this.DHead;
        if (adopted.acNext != null) {
            adopted.acNext.acPRev = adopted.acPRev;
        }
        if (this.ACHead === adopted) {
            this.ACHead = adopted.acPRev;
        }
        if (this.DHead.prev != null) {
            this.DHead = this.DHead.prev;
            this.DHead.next = null;
        } else {
            this.DHead = null;
            this.DTail = null;
        }
    }

    // Time complexity is Big O(1);
    // Space complexity is Big O(1);
    dequeueCat() {
        let adopted = this.CHead;
        if (adopted.acNext != null) {
            adopted.acNext.acPRev = adopted.acPRev;
        }
        if (this.ACHead === adopted) {
            this.ACHead = adopted.acPRev;
        }
        if (this.CHead.prev != null) {
            this.CHead = this.CHead.prev;
            this.CHead.next = null;
        } else {
            this.CHead = null;
            this.CTail = null;
        }
    }

    // Time complexity is Big O(1);
    // Space complexity is Big O(1);
    dequeueAny() {
        if (this.ACHead === this.CHead) {
            this.dequeueCat();
        } else {
            this.dequeueDog();
        }
    }
}


const ac = new AdoptionCenter();
ac.enqueue("D1", "dog");
ac.enqueue("C1", "cat");
ac.enqueue("C2", "cat");
ac.enqueue("D2", "dog");
ac.printAnimals(); //ANIMALS [ 'D1', 'C1', 'C2', 'D2' ]
ac.printCats(); // CATS [ 'C1', 'C2' ]
ac.printDogs(); // DOGS [ 'D1', 'D2' ]
ac.dequeueDog();
ac.dequeueDog();
ac.printAnimals(); // ANIMALS ['C1', 'C2']
ac.dequeueCat(); 
ac.dequeueCat();
ac.printAnimals(); // []
ac.enqueue("D1", "dog");
ac.printAnimals(); // ['D1']
ac.printCats(); // // []
ac.printDogs(); // ['D1']
ac.enqueue("C5", "cat");
ac.enqueue("C6", "cat");
ac.enqueue("C7", "cat");
ac.enqueue("D2", "dog");
ac.printAnimals(); //ANIMALS [ 'D1', 'C5', 'C6', 'C7', 'D2' ]
ac.printCats(); // CATS [ 'C5', 'C6', 'C7' ]
ac.printDogs(); // DOGS [ 'D1', 'D2' ]
ac.dequeueAny();
ac.printAnimals(); // ANIMALS [ 'C5', 'C6', 'C7', 'D2' ]
ac.dequeueAny();
ac.printAnimals(); // ANIMALS [ 'C6', 'C7', 'D2' ]