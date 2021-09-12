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
  enqueue(val, weight) {
    this.values.push({ node: val, weight });
    let index = this.values.length - 1;
    if (index != 0) {
      this.bubbleUp(index);
    }
  }

  bubbleUp(index) {
    console.log(this.values[index]['weight']);
    while (
      this.values[this.getParent(index)] &&
      this.values[index]['weight'] <
        this.values[this.getParent(index)]['weight']
    ) {
      let parentIndex = this.getParent(index);

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  peek() {
    return this.values[0];
  }

  dequeue() {
    if (this.values.length < 1) {
      return null;
    }

    let lastIndex = this.values.length - 1;
    this.swap(0, lastIndex);

    let result = this.values.pop();

    if (this.values.length > 1) {
      this.heapify(0);
    }
    return result;
  }

  heapify(index) {
    let left = this.getLeft(index),
      right = this.getRight(index),
      smallest = index,
      leftVal = this.values[left] && this.values[left]['weight'],
      rightVal = this.values[right] && this.values[right]['weight'];
    // current = this.values[current]

    if (leftVal < this.values[smallest]['weight']) {
      smallest = left;
    }

    if (rightVal < this.values[smallest]['weight']) {
      smallest = right;
    }

    if (smallest != index) {
      this.swap(index, smallest);
      this.heapify(smallest);
    }
  }
}

class weightedGraph {
  constructor() {
    this.graph = {};
  }

  addEdge(src, dest, weight) {
    if (!(src in this.graph)) this.graph[src] = [];
    if (!(dest in this.graph)) this.graph[dest] = [];

    let newVal = { node: dest, weight };
    this.graph[src].push(newVal);
  }

  dijkstra(src, dest){
    
  }
}

let graph = new weightedGraph();

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log('*******');
console.log(graph.graph);

// let pq = new PriorityQueue();
// pq.enqueue('A',19);
// pq.enqueue('B',3);
// pq.enqueue('C',24);
// pq.enqueue('E', 14);
// pq.enqueue('F',2);
// // pq.enqueue(27);
// // pq.enqueue(29);
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())

// console.log(pq.values);
