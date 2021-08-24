function findExitSteps(matrix, m , n, sr,sc){

  let visited = Array(m + 1)
  .fill()
  .map(() => Array(n + 1).fill(0));

  let rowQueue = []
  let colQueue = []
  let reached_end

  //enqueue start

  rowQueue.push(sr)
  colQueue.push(sc)

  visited[sr][sc]  = true

  while(rowQueue.length> 0 ){
    let size = rowQueue.length

    let curRow = rowQueue.shift() 
    let curCol = colQueue.shift() 

    let val = matrix[curRow][curCol]

    if(val === 'end') {
      reached_end = true
      break
    }
    

    // visited[curRow][curCol] = true

    exploreNeighbour(matrix, curRow, curCol, m, n)


  }


  function exploreNeighbour(matrix, row, col, rowBound, colBound){

    let dr = [-1, +1, 0, 0]
    let dc = [0,0,+1,-1]
  
    for(let i = 0; i < 4; i++){
      let rr = dr[i] + row
      let rc = dc[i] + col
  
      if(rr < 0 || rc < 0 || rr >= rowBound || rc >= colBound) continue
      if(visited[rr][rc]) continue
      if(matrix[rr][rc] === '#') continue

      rowQueue.push(rr)
      colQueue.push(rc)

      visited[rr][rc] = true
      

    
    }
  }


}


