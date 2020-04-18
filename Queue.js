class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}



class Queue{

    constructor(){
        this.head =  null
        this.tail =  null
        this.length =  0
    }

    enqueue(val){

        let newNode =  new Node(val)

        if(!this.head){
            this.head =  newNode
            this.tail = newNode
        }
        else{

        let current = this.tail
        this.tail.next =  newNode
        this.tail = newNode
        }

        this.length++
        return this.length
    }

    dequeue(){

        if(!this.head) return undefined

        if(this.length === 1) {
            this.tail = null
        }


        let current = this.head
        this.head = this.head.next
        current.next =  null

        this.length--
        return current.val
    }
}


let q=  new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())

console.log(q)