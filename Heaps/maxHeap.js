class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let n = this.values.length - 1;

    let parent = Math.floor((n - 1) / 2);
    // compare value with parent

    while (this.values[n] > this.values[parent]) {
      let temp = this.values[n];
      this.values[n] = this.values[parent];
      this.values[parent] = temp;

      //swap

      //update index
      n = parent;
      parent = Math.floor((n - 1) / 2);
    }
  }
}

let heap = new MaxHeap();

heap.insert(7);
heap.insert(12);
heap.insert(3);
heap.insert(2);
heap.insert(22);
heap.insert(1);
heap.insert(5);

console.log(heap.values);
