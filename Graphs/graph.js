class Graph {
  constructor(vertices) {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return 'Already exists';
    this.adjacencyList[vertex] = [];
  }
  vertexExists = (vertex) => this.adjacencyList[vertex];
  edgeExists = (vertex, edge) => this.adjacencyList[vertex].includes(edge);
  addEdge(source, destination) {
    if (!this.vertexExists(source)) {
      this.addVertex(source);
    }
    if (!this.vertexExists(destination)) {
      this.addVertex(destination);
    }
    if (!this.edgeExists(source, destination))
      this.adjacencyList[source].push(destination);
    if (!this.edgeExists(destination, source))
      this.adjacencyList[destination].push(source);
  }

  removeEdge(vertex, edge) {
    if (this.vertexExists(vertex)) {
      this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
        (value) => {
          return value != edge;
        }
      );
    }

    if (this.vertexExists(edge)) {
      this.adjacencyList[edge] = this.adjacencyList[edge].filter((value) => {
        return value != vertex;
      });
    }
  }

  removeVertex(vertex) {
    if (!this.vertexExists(vertex)) {
      return null;
    }
    let targetVertex = this.adjacencyList[vertex];

    while (targetVertex.length) {
      let adjacentEdge = targetVertex.pop();
      this.removeEdge(vertex, adjacentEdge);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(start) {
    let adjacencyList = this.adjacencyList;
    let result = [];
    let visited = {};
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((edge) => {
        if (!visited[edge]) {
          return dfs(edge);
        }
      });
    })(start);

    return result;
  }
}

let graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Paris');
graph.addEdge('Paris', 'Lagos');
graph.addEdge('Tokyo', 'Paris');
graph.addEdge('Tokyo', 'Paris');
graph.addEdge('Paris', 'Lagos');
graph.addEdge('London', 'Lagos');
graph.addEdge('London', 'Dakar');
graph.addEdge('Tokyo', 'Minna');
graph.addEdge('Beijing', 'Kong');
graph.addEdge('Beijing', 'Paris');

console.log(graph.adjacencyList);
console.log('************');
console.log(graph.depthFirstSearch('Tokyo'));

// console.log(graph.adjacencyList);
//addEdege
//addVertex
//deleteEdge
//deleteVertex
