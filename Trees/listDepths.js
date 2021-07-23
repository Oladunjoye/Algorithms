const BST = require('./bst');

class Node{
  constructor(val){
    this.val =  val
    this.left = null
    this.right = null
  }
}

function listDepths(root){

  if(!root) return null

  let queue = []
  let result = []

  queue.push(root)

  while(queue.length > 0){

    let level = []
    let size = queue.length

    for(let index = 0 ; index < size; i++){
      let temp = queue.shift()
      level.push(temp.val)
      if(temp.left) queue.push(temp.left)
      if(temp.right) queue.push(temp.right)


    }

    result.push(level)
  }

  return result
}


let tree = new BST(10);
tree.insertIterative(6);
tree.insertIterative(15);
tree.insertIterative(3);
tree.insertIterative(8);
tree.insertIterative(20);


console.log(listDepths(tree.root))