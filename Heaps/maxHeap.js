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

  getIndexes(parent) {
    let leftIndex = 2 * parent + 1;
    let rightIndex = 2 * parent + 2;
    let maxIndex =
      this.values[leftIndex] > this.values[rightIndex] ? leftIndex : rightIndex;

    return [leftIndex, rightIndex, maxIndex];
  }

  extractMax() {
    // let values = this.values
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    let parent = 0;
    let [leftIndex, rightIndex, maxIndex] = this.getIndexes(0);

    while (this.values[parent] < this.values[maxIndex]) {
      let temp = this.values[maxIndex];
      this.values[maxIndex] = this.values[parent];
      this.values[parent] = temp;

      //update values
      let [, , newMaxIndex] = this.getIndexes(maxIndex);
      parent = maxIndex;
      maxIndex = newMaxIndex;
    }

    //get the highest -- root node
    // compare with left and right child
    // swap with the higher value
    //set new index to the higher selected index
    // repeat
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
heap.insert(45);
heap.insert(9);
heap.insert(13);
heap.insert(24);

heap.extractMax();
heap.extractMax();
// heap.extractMax();

console.log(heap.values);
