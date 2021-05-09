
class Graph {
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
}

let g = new Graph();
g.addVertex(1);
g.addEdge(1, "Togo");
g.addEdge(1, "Tope");

g.addVertex("Tope");
g.addEdge("Tope", 2);
g.addEdge("Tope", 12);
g.addEdge("Tope", 22);
g.addEdge("Tope", 42);

g.addEdge("Tope", 3);
g.addEdge("Tope", 4);
g.addEdge("Tope", 2);
g.removeEdge("Tope", 2);

console.log(g.depthFirstRecursive(1));
// g.removeVertex(1);

console.log(g.adjacencyList);
