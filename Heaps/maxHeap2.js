class MaxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }

  insert(val) {
    if (this.elements >= this.heap.length) {
      this.heap.push(val);
      this.elements++;
      this.percolateUp(this.heap.length - 1);
    } else {
      this.heap[this.elements] = val;
      this.elements++;
      this.percolateUp(this.elements - 1);
    }
  }
  getmax() {
    if (this.elements != 0) {
      return this.heap[0];
    }
    return null;
  }
  removeMax() {
    if (this.elements > 1) {
      let max = this.heap[0];
      this.heap[0] = this.heap[this.elements - 1];
      this.elements--;
      this.maxHeapify(0);
      return max;
    } else if (this.elements == 1) {
      let max = this.heap[0];
      this.elements--;
      return max;
    } else {
      return null;
    }
  }

  percolateUp(index) {
    let parent = Math.floor((n - 1) / 2);
    if (index <= 0) {
      return;
    } else if (this.heap[parent] < this.heap[index]) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[parent];
      this.heap[parent] = temp;
      this.percolateUp(parent);
    }
  }

  maxHeapify(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let largest = index;
    if (this.elements > left && this.heap[largest] < this.heap[left]) {
      largest = left;
    }

    if (this.elements > right && this.heap[largest] < this.heap[right]) {
      largest = right;
    }

    if (largest != index) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[largest];
      this.heap[largest] = temp;

      this.maxHeapify(largest);
    }
  }
}
