class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root) {
    this.root = new Node(root);
  }
}

let tree = new BST(7);
tree.left = new Node(5);
tree.right = new Node(12);

console.log(tree);
