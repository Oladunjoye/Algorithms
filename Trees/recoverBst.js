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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    
  if(!root) return null
  function valid(root, min , max){
      if(!root) return null
      
      
      if(root.val <= min.val && root.val > max.val){
          
      }

      
      if(root.val <= min.val ){
          let temp = min.val
            min.val = root.val
            root.val = temp
          return root
      }
      if(root.val > max.val){
          let temp = max.val
            max.val = root.val
            root.val = temp
          return root
      }
      
       
   return valid(root.left, min, root) || valid(root.right, root, max)
      
   

      
  }
  
  let minTree = new TreeNode(Number.NEGATIVE_INFINITY)
  let maxTree = new TreeNode( Number.POSITIVE_INFINITY)
  
  return  valid(root,minTree, maxTree)
  
  
};


[1,3,2,5,3,null,9]