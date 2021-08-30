class Graph {
  constructor(){
      this.adjacencyList = {}
  }
  
  addEgde(dest,source){
      if(!this.adjacencyList[source]){
          this.adjacencyList[source] = []
      }
        this.adjacencyList[source].push(dest)
      return this.adjacencyList
  }
  topSort(){
      let adjacencyList = this.adjacencylist
      let vertices =  Object.keys(adjacencyList)
      let n = vertices.length - 1
      let visited = {}
      let topNums = {}
      
      function dfs(vertex, n, visited, topNums){
          visited[vertex] = true
          let neighbours = adjacencyList[vertex]
          
          for(let neighbour of neighbours){
              if(!visited[neighbour]){
                    n = dfs(vertex, n-1, visited, topNums)
              }
            
              
          }
          
          topNums[vertex] = n
          return n-1
      }
      
      for(let vertex of vertices){
          if(!visited[vertex]){
           n = dfs(vertex, n, visited, topNums)  
          }
      }
   
      return Object.keys(topNums)
      
      
  }
}


var canFinish = function(numCourses, prerequisites) {
  //create graph of  prereqs
  // topological sort of nodes
  // loop thru to see
  
  let status = true
  let graph = new Graph()
  
  // console.log(Object.getOwnPropertyNames(graph))
 console.log(graph.addEdge(1,2)) 
  
  
  for(pair of prerequisites){
      let [a,b] = pair
      graph.addEdge(a,b)
      
  }
  
  let sorted = graph.topSort()
  
  for(let pair of prerequisites){
       let [a,b] = pair
       
       if(sorted.indexof(b) > sorted.indexOf(a)){
           sorted = false
           break
       }
  }
  
       
       return status

};




console.log(canFinish(2,  [[1,0],[0,1]]))