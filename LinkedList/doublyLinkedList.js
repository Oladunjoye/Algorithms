class Node{
    constructor(val){

        this.val  = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){

        this.head = null
        this.tail = null
        this.length = 0

    }

    push(val){

        let newNode  = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }
        else{
            // let prevNode = this.tail
            this.tail.next =  newNode
            newNode.prev =  this.tail
            this.tail = newNode
            
        }
        this.length++
        return this

    }

    pop(){
       if( !this.tail) return undefined

       let tail = this.tail

       if(this.length == 1){
           this.head = null
           this.tail = null

       }
       else{
        this.tail = tail.prev
        this.tail.next = null
       tail.prev = null

       }
       
      
      

       this.length--
       return tail

    }

    shift(){
        let oldHead =  this.head


        if(!this.head)return undefined

        if(this.length === 1){
            this.head = null
            this.tail = null 
        }
        else{
        this.head = this.head.next
        this.head.prev = null
        oldHead.next =  null
        }

        this.length--
        
        return oldHead
    }
    unshift(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        // let oldHead= this.head
        this.head.prev = newNode 
        newNode.next =  this.head
        this.head = newNode
        // this.head.next =  oldHead 



        this.length++
        return this
    }

    get(index){

        if(index < 0 || index > this.length) return undefined
        let half =  Math.floor(this.length/2)
        let current
        let counter

        if(index <= half){
            counter = 0
            current = this.head


           while(counter != index){

            current = current.next
            counter++

           }
        //    return current
        } 
        else{
            counter = this.length - 1
            current = this.tail
           while(counter != index){

               current = current.prev
               counter--
           } 

        //    retur


        }

        return current



    }

    set(index, val){

        const node= this.get(index)

        node.val = val
        return node
    }

    insert(index, val){

        if(index < 0 || index > this.length) return undefined
        if(index == 0) return this.unshift(val)
        if(index === this.length) return this.push(val)
        const node = new Node(val)

        const prevNode = this.get(index-1)
        const nextNode = this.get(index)

        prevNode.next = node
        node.next = nextNode
        node.prev = prevNode
        nextNode.prev = node

        this.length++

        return this
    }
}

let list = new DoublyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(60)

// list.unshift(50)


// list.pop()
// list.shift()
// console.log(list.shift())


console.log(list.insert(1, 'A'))
console.log(list)
