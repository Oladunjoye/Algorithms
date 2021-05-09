const Stack = require('./Stack.js');
function sortStack(stack) {
  let tempStack = new Stack();

  // -1 -2 -3
  tempStack.push(stack.pop());

  while (stack.isEmpty() === false) {
    if (stack.getTop() > tempStack.getTop()) {
      tempStack.push(stack.pop());
    } else {
      let temp = stack.pop();
      let count = 0;
      while (tempStack.getTop() > temp && !tempStack.isEmpty()) {
        stack.push(tempStack.pop());
        count++;
      }
      tempStack.push(temp);

      while (count > 0) {
        tempStack.push(stack.pop);
        count--;
      }
    }
  }

  // console.log("temp")
  //  console.log(tempStack)
  // console.log("main")

  //  console.log(stack)

  while (tempStack.isEmpty() === false) {
    stack.push(tempStack.pop());
  }
  // console.log(stack);
  return stack;
}

let stack1 = new Stack();
stack1.push(5);
stack1.push(4);
stack1.push(3);
stack1.push(9);
stack1.push(2);
stack1.push(1);

console.log(stack1);
// console.log(sortStack(stack1));
let result = sortStack(stack1);

// for (let i = 0; i < result.size(); i++) {
//   console.log(result.pop());
// }
