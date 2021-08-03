// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    let stack = [];
    stack.push(this);

    while (stack.length > 0) {
      let current = stack.pop();
      array.push(current.name);
      if (current.children.length > 0) {
        for (let i = current.children.length - 1; i >= 0; i--) {
          stack.push(current.children[i]);
        }
      }
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
