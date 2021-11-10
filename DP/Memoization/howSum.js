function howSum(numbers, target, memo= {}) {
  // base cases
  if(target in memo) return memo[target]
  if (target == 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let newTarget = target - num;

    let value = howSum(numbers, newTarget, memo);

    if (value) {
      value.push(num);

      memo[target] = value
      return value;
    }
  }

  memo[target] = null
  return null;
}

console.log(howSum([5, 3, 4, 7], 7));
console.log(howSum([3, 1], 7));
console.log(howSum([2, 3], 7));
console.log(howSum([3, 9], 7));
console.log(howSum([7,14], 300))
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
  //create graph of  prereqs
  // topological sort of nodes
  // loop thru to see
  
  let status = true
  let graph = new Graph()
  
  
  
  for(pair of prerequisites){
      let [a,b] = pair
      graph.addEdge(a,b)
      
     // console.log(graph.adjacencyList)
      
  }
  
  
  let sorted = graph.topSort()
  console.log(sorted)
  for(let pair of prerequisites){
       let [a,b] = pair
      

       if(sorted.indexOf(b.toString()) > sorted.indexOf(a.toString())){
           status = false
           break
       }
  }
  
       
       return status

};

class Graph {
  constructor(){
      this.adjacencyList = {}
  }
  
  addEdge(dest,source){
      if(!this.adjacencyList[source]){
          this.adjacencyList[source] = []
           this.adjacencyList[dest] = []

      }
        this.adjacencyList[source].push(dest)
      return this.adjacencyList
  }
  topSort(){
      let adjacencyList = this.adjacencyList
      // console.log(adjacencyList)
      let vertices =  Object.keys(adjacencyList)
      let n = vertices.length - 1
      let visited = {}
      let topNums = {}
      
      function dfs(vertex, n, visited, topNums){
          visited[vertex] = true
          let neighbours = adjacencyList[vertex]
          
          
          for(let neighbour of neighbours){
             
              if(!visited[neighbour]){
                    n = dfs(neighbour, n-1, visited, topNums)
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



// 4   [[1,4], [3,2], [0,1], [1,3]]

