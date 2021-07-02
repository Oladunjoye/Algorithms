function canSum(numbers, target, memo= {}){

  if(target in memo)return memo[target]
  if(target == 0) return true
  if(target < 0) return false

  let status = false
  
  for(let num of numbers){
    let newTarget = target - num

    // console.log(num,newTarget, numbers)
    // let newStatus = 
    
   let newStatus =  canSum(numbers,newTarget,memo)

    status = status || newStatus 
    memo[target] = status


  }

  memo[target] = status
  return memo[target]

}

console.log(canSum([3,2], 3))
console.log(canSum([5,3,4,7], 7))
console.log(canSum([2,4], 7))
console.log(canSum([2,3,5], 8))
console.log(canSum([7,14], 300))
// console.log(canSum([0,1,2], 3))
