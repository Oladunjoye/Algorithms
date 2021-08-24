/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    
  function checkSum(node, currentSum = 0){
     if(node == null && currentSum == targetSum) {
         
         return true
     }
   
      if(!node) return false
      
      
      let left = checkSum(node.left, node.val+ currentSum)
      let right = checkSum(node.right, node.val + currentSum)
      
     
      return left || right

  }
  
  // let startSum = root
  return checkSum(root, root ? 0 : -Number.NEGATIVE_INFINITY)
  
};