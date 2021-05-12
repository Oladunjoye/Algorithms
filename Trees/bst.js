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

  insertIterative(newvalue) {
    if (!this.root.value) {
      this.root = new Node(newvalue);
      return;
    }

    let currentNode = this.root;
    let parent;

    while (currentNode) {
      parent = currentNode;

      if (newvalue > currentNode.value) {
        currentNode = currentNode.right;
      } else if (newvalue < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return;
      }
    }

    if (newvalue < parent.value) {
      parent.left = new Node(newvalue);
    } else {
      parent.right = new Node(newvalue);
    }

    return this.root;
  }

  insertHelper(currentNode, newValue) {
    if (currentNode === null) {
      currentNode = new Node(newValue);
    } else if (newValue < currentNode.value) {
      currentNode.left = this.insertHelper(currentNode.left, newValue);
    } else {
      currentNode.right = this.insertHelper(currentNode.right, newValue);
    }

    return currentNode;
  }

  insertRecursive(newValue) {
    if (!this.root.value) {
      this.root = new Node(newValue);
      return;
    }

    let currentNode = this.root;
    this.insertHelper(this.root, newValue);
  }
}

// let rootNode = new Node(7);
// let tree = new BST(7);
// tree.left = new Node(5);
// tree.right = new Node(12);

let tree = new BST();

tree.insertRecursive(7);

tree.insertRecursive(1);

tree.insertIterative(71);
// tree.insertIterative(4);
// tree.insertIterative(14);
// tree.insertIterative(1);

console.log(tree.root);
