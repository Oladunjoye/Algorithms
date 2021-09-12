class PriorityQueue {
  constructor() {
    this.values = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeft(index) {
    return 2 * index + 1;
  }

  getRight(index) {
    return 2 * index + 1;
  }
  enqueue(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    if (index != 0) {
      this.bubbleUp(index);
    }
  }

  bubbleUp(index) {
    
    while (this.values[index] < this.values[this.getParent(index)]) {
      let parentIndex = this.getParent(index);

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [this.values[idx2],this.values[idx1]];
  }

  peek(){
    return this.values[0]
  }

  dequeue(){

    if(this.values.length < 1){
      return null
    }

    let lastIndex = this.values.length-1
    this.swap(0, lastIndex)

    let result = this.values.pop()

    if(this.values.length> 1){
      this.heapify(0)
    }
    return result
  }

  heapify(index){

    let left = this.getLeft(index),
    right = this.getRight(index),
    smallest = index,
    leftVal = this.values[left],
    rightVal = this.values[right]
    // current = this.values[current]


    if(leftVal < this.values[smallest] ){
      smallest = left
    }

    if(rightVal < this.values[smallest]){
      smallest = right
    }

    if(smallest != index){

      this.swap(index, smallest)
      this.heapify(smallest)
    }


  }
}

let pq = new PriorityQueue();
pq.enqueue(19);
pq.enqueue(3);
pq.enqueue(24);
pq.enqueue(14);
pq.enqueue(2);
pq.enqueue(27);
pq.enqueue(29);
console.log(pq.dequeue())
console.log(pq.dequeue())




console.log(pq.values);
