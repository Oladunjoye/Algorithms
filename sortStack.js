const Stack = require('./Stack/stack');

function sortStack(stack) {
  let sortedStack = new Stack();

  // while input stack is not empty
  // pop current top and label temp
  //check if tempstack is empty... if so push temp and continue back to main loop
  // if not empty
  //check top ... if top is greater than temp... push temp and contunie loop
  // else pop sortedStack  till SS peak is greater than temp
  //then push temp ... then return back to main loop
  //[3,1]
  //[5]

  while (stack.size() >= 1) {
    let temp = stack.pop(); //5

 
    if (sortedStack.size() < 1 || sortedStack.top > temp) {
      sortedStack.push(temp); //[3]
    } 
    else {

      while (sortedStack.top < temp) {
        stack.push(sortedStack.pop());
      }
      sortedStack.push(temp);
    }
  }

  return sortedStack;
}
//[3,5,1]

let testStack = new Stack();
testStack.push(3);
testStack.push(13);
testStack.push(6);
testStack.push(1);
testStack.push(2);
testStack.push(8);

console.log(sortStack(testStack));
