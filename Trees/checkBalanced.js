const BST = require('./bst');


var isBalanced = function(root) {
    
  function getBalance(root){
   if(root === null) return true
  
  return height(root) !== -1
  }

  
   function height(node){
      
      if(node == null) return 0
      
      let left = height(node.left)     
      let right = height(node.right)
      let bf = Math.abs(left - right)
      
      if(bf > 1 || left == -1 || right == -1) return -1
      return 1 + Math.max(left, right)

      
  }
  
 
  return getBalance(root)
  
};