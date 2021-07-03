function bestSum(numbers, target){

  if(target == 0) return []
  if(target <  0) return null

  let result = null
  for(let num of numbers){
    let newTarget = target - num

    let value = bestSum(numbers, newTarget)

    if(value ){
      let combination = [...value, num]

      if(result === null || combination.length < result.length){
        result = combination
      }
    }
 
   
  }
 
  return result
}


console.log(bestSum([6,3,4,1],7))
console.log(bestSum([1,25,4,10],100))
