function nextGreaterElement (nums1, nums2) {
  let map = {}
  let stack = []
  let result = []
  
  for(num of nums2){
      let peak = stack[stack.length-1]
      while(stack.length >0 && peak < num){
        console.log(stack,peak)
          let value = stack.pop()
            map[value] = num
    }
      
      stack.push(num)
      // console.log(stack,peak)
      
  }
  
  for(let i of nums1){
      if(map[i]){
          result.push(map[i])
      } 
      else{
          result.push(-1)
      }
  }
  
  return result
};

(nextGreaterElement([21,7,2,13,4,65,2], [21,7,2,13,4,65,2]))

let resultA = new Array(7+1).fill(-1)
console.log(resultA)