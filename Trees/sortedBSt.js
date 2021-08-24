 function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
   }
  
var sortedArrayToBST = function(nums) {
    
    
  function insertHelper(arr){
      if(arr.length < 1) return null
      let mid = Math.floor(arr.length/2)

     let current = arr[mid]
      
     let left = insertHelper(arr.slice(0, mid))
     let right = insertHelper(arr.slice( mid))

      
      
      return new TreeNode(current, left,right)
      
  
  }

  return insertHelper(nums)

}

// console.log(sortedArrayToBST([1,2,4,5,6,7]))

console.log([].slice(0))
