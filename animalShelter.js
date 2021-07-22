class AnimalNode {
  constructor(type) {
    this.type = type;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(type) {
    let newAnimal = new AnimalNode(type);

    if (!this.head) {
      this.head = newAnimal;
      this.tail = this.head;
    } else {
      this.tail.next = newAnimal;
      this.tail = newAnimal;
    }

    this.length++;
  }

  dequeueAny() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.head.next;

    return temp;
  }

  dequeue(type) {
    //remove first dog or cat

    let current = this.head;
    let prev;
    if (current.type == type) return this.dequeueAny();
    while (current.type != type && current != null) {
      prev = current;
      current = current.next;
    }

    if (!current) return null;

    prev.next = current.next;

    return current;
  }
}

let shelter = new AnimalShelter();

// let animal1 = new AnimalNode('dog');
// let animal2 = new AnimalNode('dog');
// let animal3 = new AnimalNode('cat');

shelter.enqueue('dog');
shelter.enqueue('dog');
shelter.enqueue('cat');

console.log(shelter);

// let current = shelter.head;

// while (current != null) {
//   console.log(current.type);
//   current = current.next;
// }

// console.log(shelter.head);
// console.log('***');
// console.log(shelter.head.next);
// console.log('***');
// console.log(shelter.head.next.next);
