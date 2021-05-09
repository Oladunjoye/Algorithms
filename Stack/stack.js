// // LIFO OR PUSH & POP DATA STRUCTURE

'use strict';
module.exports = class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    if (this.items.length == 0) return null;
    return this.top;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length != 0) {
      if (this.items.length == 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else return null;
  }
};
// class Node{
//     constructor(val){
//         this.val = val
//         this.next =  null

//     }
// }

// class Stack {

//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0

//     }

//     add(val){

//         let newNode =  new Node(val)
//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode

//         }
//         else{
//             let current= this.head
//             newNode.next =  current
//             this.head =  newNode
//         }

//         this.length++

//         return this

//     }

//     remove(){
//         if(this.length < 1) return undefined
//         if(this.length === 1){
//             this.tail = null
//         }

//         let current = this.head

//         this.head =  current.next

//         current.next = null
//         this.length--

//         return current

//     }
// }

// let stack = new Stack()
// stack.add(1)
// stack.add(2)
// stack.add(3)
// stack.add(4)

// console.log(stack.remove())
// console.log(stack.remove())
// console.log(stack.remove())
// console.log(stack.remove())

// console.log(stack)
