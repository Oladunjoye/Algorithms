function gridTraveller(m,n){

  if(m === 1 && n === 1) return 1
  if(m == 0 || n == 0) return 0

  let sum = gridTraveller(m-1,n) + gridTraveller(m,n-1)

  return sum

}

console.log(gridTraveller(0,0))
// console.log(gridTraveller(0,0))
// console.log(gridTraveller(0,0))
// console.log(gridTraveller(0,0))
// console.log(gridTraveller(0,0))
// console.log(gridTraveller(0,0))


// [0,n] -> 0 ways
// [1,1] -> 1 way
