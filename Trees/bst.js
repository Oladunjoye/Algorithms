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

  //root-left-right
  preOrderTraversal(currentNode) {
    if (currentNode != null) {
      console.log(currentNode.value);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }

  //left-root-right

  inOrderTraversal(currentNode) {
    if (currentNode != null) {
      this.preOrderTraversal(currentNode.left);
      console.log(currentNode.value);

      this.preOrderTraversal(currentNode.right);
    }
  }

  //left-right-root
  postOrderTraversal(currentNode) {
    if (currentNode != null) {
      this.preOrderTraversal(currentNode.left);

      this.preOrderTraversal(currentNode.right);
      console.log(currentNode.value);
    }
  }

  bstHelper(current, node) {
    if (current !== null) {
      if (current.value === node) {
        return current;
      } else if (node > current.value) {
        return this.bstHelper(current.right, node);
      } else {
        return this.bstHelper(current.left, node);
      }
    } else {
      return null;
    }
  }

  binarySearch(node) {
    let current = this.root;
    return this.bstHelper(current, node);
  }

  binarySearchIterative(nodeValue) {
    let currentNode = this.root;

    while (currentNode != null) {
      if (nodeValue > currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  deleteNode(value) {
    let currentNode = thhis.root;

    // if null
    if (value == null || currentNode == null) {
      return null;
    }


  }
}

// let rootNode = new Node(7);
// let tree = new BST(7);
// tree.left = new Node(5);
// tree.right = new Node(12);

let tree = new BST(10);

tree.insertRecursive(7);
tree.insertRecursive(9);

tree.insertRecursive(1);

tree.insertIterative(71);
tree.insertIterative(81);

tree.insertIterative(4);
tree.insertIterative(14);
tree.insertIterative(1);
tree.insertIterative(3);
tree.insertIterative(5);
tree.insertIterative(11);

// tree.insertIterative(23);
// tree.preOrderTraversal(tree.root);
// console.log('********');
// tree.inOrderTraversal(tree.root);
// console.log('********');
// tree.postOrderTraversal(tree.root);

// console.log(tree.binarySearch(14));
console.log(tree.binarySearch(4));

// console.log(tree);
