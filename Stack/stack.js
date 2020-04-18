// LIFO OR PUSH & POP DATA STRUCTURE

class Node{
    constructor(val){
        this.val = val
        this.next =  null

    }
}

class Stack {

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0

    }

    add(val){

        let newNode =  new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode

        }
        else{
            let current= this.head
            newNode.next =  current
            this.head =  newNode
        }

        this.length++

        return this

    }

    remove(){
        if(this.length < 1) return undefined

        let current = this.head

        this.head =  current.next


        current.next = null
        this.length--

        return current


    }
}

let stack = new Stack()
stack.add(1)
stack.add(2)
stack.add(3)
stack.add(4)



console.log(stack.remove())
console.log(stack.remove())
console.log(stack)