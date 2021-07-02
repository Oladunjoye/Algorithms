function gridTraveller(m,n, memo = {}){

  if(m+","+n in memo) return memo[m+","+n]
  if(m === 1 && n === 1) return 1
  if(m == 0 || n == 0) return 0

  let sum = gridTraveller(m-1,n, memo) + gridTraveller(m,n-1, memo)
  memo[m+","+n] = sum
  return sum

}

console.log(gridTraveller(0,0))
console.log(gridTraveller(2,3))
console.log(gridTraveller(1,1))
console.log(gridTraveller(3,3))
console.log(gridTraveller(18,18))
// console.log(gridTraveller(0,0))


// [0,n] -> 0 ways
// [1,1] -> 1 way
