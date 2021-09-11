const hasPath = (graph,source, dest)=>{
if(source === dest) return true
if(source === null) return false

let neighbours = graph[source]

for(let neighbour of neighbours){
  if(hasPath(graph, neighbour, dest) === true) return true
}

return false
}

