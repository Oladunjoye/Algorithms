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

  //in order backwards

  inOrderTraversalBack(currentNode) {
    if (currentNode != null) {
      this.inOrderTraversalBack(currentNode.right);
      console.log(currentNode.value);
      this.inOrderTraversalBack(currentNode.left);
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
    let currentNode = this.root;
    let parent;

    //case 1: empty tree or null root
    if (value == null) {
      return false;
    }

    while (currentNode != null && currentNode.val != value) {
      parent = currentNode;
      if (value >= currentNode.val) {
        currentNode = currentNode.rightChild;
      } else {
        currentNode = currentNode.leftChild;
      }
    }
    //case 2: value not found in tree

    if (currentNode === null) {
      return false;
    }
    //case 3 value found:  leaf node
    else if (
      currentNode.leftChild === null &&
      currentNode.rightChild === null
    ) {
      //check if node is root node
      if (currentNode === this.root) {
        this.root = null;
        return true;
      }
      // check if its left child
      else if (value < parent.value) {
        parent.leftChild = null;
        return true;
      }
      // check if its right child
      else {
        parent.rightChild = null;
        return true;
      }
    }

    //case 4 value found:  has one child-right
    else if (currentNode.leftChild === null) {
      //check if node is root node
      if (currentNode.val === this.root.val) {
        this.root = currentNode.rightChild;
        return true;
      } else if (currentNode.val > parent.val) {
        parent.leftChild = currentNode.rightChild;
        return true;
      } else {
        parent.rightChild = currentNode.rightChild;
      }
    }
    //case 5 value found:  has one child-left
    else if (currentNode.rightChild === null) {
      //check if node is root node
      if (currentNode.val === this.root.val) {
        this.root = currentNode.leftChild;
        return true;
      } else if (currentNode.val > parent.val) {
        parent.leftChild = currentNode.leftChild;
        return true;
      } else {
        parent.rightChild = currentNode.leftChild;
      }
    }

    //case 6 value found:  has two children

    
  }

  findKthMax(rootNode, k) {
    let result = [];
    function traverseBack(current) {
      if (current != null) {
        traverseBack(current.rightChild);
        result.push(current.val);
        traverseBack(current.leftChild);
      }
    }

    traverseBack(rootNode);
    return result[k - 1];
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
tree.inOrderTraversalBack(tree.root);
// console.log('********');
// tree.postOrderTraversal(tree.root);

// console.log(tree.binarySearch(14));
// console.log(tree.binarySearch(4));

// console.log(tree);
