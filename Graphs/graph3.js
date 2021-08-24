class Queue {
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    return this.values;
  }

  dequeue() {
    let val = this.values.shift();
    return val;
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push(val);
  }

  pop() {
    return this.items.pop();
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex, edge) {
    // let key = this.adjacencyList[vertex];
    // let edgeKey = this.adjacencyList[edge]

    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].push(edge);
    } else {
      return null;
    }
  }

  removeEdge(vertex, edge) {
    if (!this.adjacencyList[vertex]) return null;
    this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
      (e) => e != edge
    );
  }

  removeVertex(vertex) {
    delete this.adjacencyList[vertex];
  }

  dfsrecursive(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function dfsHelper(node) {
      if (!node) return;

      result.push(node);
      visited[node] = true;

      if (!adjacencyList[node]) return;

      adjacencyList[node].map((edge) => {
        if (!visited[edge]) {
          return dfsHelper(edge);
        }
      });
    }

    for (let vertex in adjacencyList) {
      if (!visited[vertex]) {
        dfsHelper(vertex);
      }
    }

    return result;
  }

  topSort() {
    let adjacencyList = this.adjacencyList;
    let vertices = Object.keys(adjacencyList);
    let visited = {};
    let topNums = {};
    let n = vertices.length - 1;

    function dfsTopSortHelper(v, n, visited, topNums) {
      let neighbours = adjacencyList[v];
      // console.log(neighbours);
      visited[v] = true;

      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          n = dfsTopSortHelper(neighbour, n, visited, topNums);
        }
      }

      topNums[v] = n;
      return n - 1;
    }

    for (let vertex of vertices) {
      if (!visited[vertex]) {
        n = dfsTopSortHelper(vertex, n, visited, topNums);
      }
    }

    return Object.keys(topNums);
  }

  topologicalSort() {
    //variables
    let visited = {};
    let topNums = {};
    let adjacencyList = this.adjacencyList;
    let vertices = Object.keys(adjacencyList);

    let n = vertices.length - 1;
    function dfsTopSortHelper(vertex, n, visited, topNums) {
      visited[vertex] = true;
      let neighbours = adjacencyList[vertex];

      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          n = dfsTopSortHelper(neighbour, n, visited, topNums);
        }
      }

      topNums[vertex] = n;
      return n - 1;
    }

    for (let vertex of vertices) {
      if (!visited[vertex]) {
        n = dfsTopSortHelper(vertex, n, visited, topNums);
      }
    }
    return Object.keys(topNums);
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
g.addEdge('D', 'E');
g.addEdge('E', 'F');

// // g.addVertex(2);
// // g.addVertex(3);
// // g.addVertex(4);
// g.addVertex(5);

// g.addEdge(1, 'Togo');
// g.addEdge(1, 'Tope');

// g.addVertex('Togo');

// g.addVertex('Tope');
// g.addEdge('Tope', 2);
// g.addEdge('Tope', 12);
// g.addEdge('Tope', 22);
// g.addEdge('Tope', 42);

// // g.addVertex('Tope');
// g.addEdge('Togo', 3);
// g.addEdge('Togo', 4);
// g.addEdge('Togo', 2);
// console.log(g.dfsrecursive(1));

console.log(g.topologicalSort());
console.log(g.topSort());

// console.log(g.adjacencyList);
