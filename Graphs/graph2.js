const Stack = require('../Stack/stack');
// const Queue = require('../Stack/Queue');

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.push(val);
  }
  dequeue() {
    return this.items.shift();
  }

  length() {
    return this.items.length;
  }
}

module.exports = class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      return null;
    }

    this.adjacencyList[source].push(destination);
  }

  removeEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      return null;
    }

    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex !== destination
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    let adjacencyList = this.adjacencyList;
    let result = [];
    let visited = {};

    function dfsr(vertex) {
      if (!vertex) {
        // console.log("yep");
        return null;
      }

      result.push(vertex);
      visited[vertex] = true;

      // console.log(adjacencyList[vertex]);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!adjacencyList[neighbour]) {
          visited[neighbour] = true;
          result.push(neighbour);

          return null;
        }
        if (!visited[neighbour]) {
          return dfsr(neighbour);
        }
      });
    }

    dfsr(start);

    return result;
  }

  depthFirstIterative(start) {
    let result = [];
    let visited = {};
    let stack = new Stack();
    stack.push(start);
    visited[start] = true;
    let currentNode;

    while (stack.size() > 0) {
      currentNode = stack.pop();
      result.push(currentNode);

      if (!this.adjacencyList[currentNode]) {
        continue;
      } else {
        this.adjacencyList[currentNode].forEach((neighbour) => {
          if (!visited[neighbour]) {
            visited[neighbour] = true;
            stack.push(neighbour);
          }
        });
      }
    }

    return result;
  }

  breadthFirst(start) {
    let result = [];
    let visited = {};
    let queue = new Queue();
    let currentNode;
    queue.enqueue(start);
    visited[start] = true;

    while (queue.length() > 0) {
      // console.log(queue);

      currentNode = queue.dequeue();
      result.push(currentNode);

      if (!this.adjacencyList[currentNode]) {
        continue;
      } else {
        this.adjacencyList[currentNode].forEach((neighbour) => {
          // console.log(neighbour);
          if (!visited[neighbour]) {
            visited[neighbour] = true;
            queue.enqueue(neighbour);
          }
        });
      }
    }

    return result;
  }
}

let g = new Graph();
g.addVertex(1);
g.addEdge(1, 'Togo');
g.addEdge(1, 'Tope');

g.addVertex('Tope');
g.addEdge('Tope', 2);
g.addEdge('Tope', 12);
g.addEdge('Tope', 22);
g.addEdge('Tope', 42);

g.addEdge('Tope', 3);
g.addEdge('Tope', 4);
g.addEdge('Tope', 2);
g.removeEdge('Tope', 2);

console.log(g.adjacencyList);

console.log(g.breadthFirst(1));
// console.log(g.depthFirstIterative(1));

// g.removeVertex(1);

// console.log(g.adjacencyList);
