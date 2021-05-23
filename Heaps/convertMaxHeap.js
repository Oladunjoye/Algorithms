function convertMax(maxHeap) {
  console.log(maxHeap)

  let index= maxHeap.length
  let lowerBoundary = Math.floor(index/2)
  let upperBoundary = index-1
  for(let i = lowerBoundary; i <= upperBoundary; i++){
      percolateUp(i)
  }

  function percolateUp(index){
      
      let parent = Math.floor((index-1) /2)

      if(index <= 0){
          return
      }
      else if(maxHeap[index] < maxHeap[parent]){
         
          let temp  = maxHeap[index]
          maxHeap[index] = maxHeap[parent]  
          maxHeap[parent]  = temp
          percolateUp(parent)

      }
     
  }
  return maxHeap
}


//accepts array input and returns array