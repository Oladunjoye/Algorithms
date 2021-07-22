//create a node class/object to carry the individual linked list item
// each node contains a value and a reference to the next item
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

// the linkedlist houses all the nodes in a specific
// the linkedlist contains the head (first node), tail(last node) and all the nodes inbetween reference the next

class SingleLinkedList{
    //the constructor initiliazes the linked list by setting the head, tail and length
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0

    } 

      isEmpty (){
        return (!this.head)
    }

    push (val){
        // the push adds a node to the end of the LL, increases the length and sets the next reference to null
        var newNode = new Node(val) //new node is instantiated with value passed in and the next set as null
       
        //if the head is null ,  the LL is empty hence set the head and the tail to the newNode
        if(!this.head){
            this.head =  newNode

            this.tail =  this.head


        }
        // if the LL contains nodes then the concern is with the last node (tail)
        // the current tail's next reference is changed from null to newNode 
        // the current tail is changed to new node
        else{
            this.tail.next =  newNode
            this.tail =  newNode


        }

        this.length++
        return this;
    }

    // this loops rounds the LL
    
    traverse(){
        var current = this.head

        while(current){
            console.log(current.val)
            current = current.next
        }
    }

    pop(){
  
//the pop removes a node form the end of the LL

        if(!this.head) return undefined  // if the LL is empty the it returns undefined

        // since the only entry to the LL is the beginning, first we traverse the LL
        // keep track of the current value which will run up till the final node
        // and the newTail will keep track of the second to the last node
        var current= this.head
        var newTail= current


        //travers while the next reference is not null
        while(current.next){

            //move the newTail to the current val

            newTail = current

            //move the current to the next ref
            current =  current.next
        }

        //once the loop stops then the next refence is null and the LL has reached its end
        //now set the LL tail to the newTail variable
        // set the next ref from the current value to null, decrease length by 1
        this.tail =  newTail
        this.tail.next = null
        this.length--


        // if the node has been popped to zero, the condition resets the head and tail
        if(this.length === 0){
            this.head=  null
            this.tail = null
        }

        return current
    }

    shift(){
        if(!this.head) return undefined

        var current = this.head
        this.head = current.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }

        return current
    }

    unshift(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode

        }
        else{
            // const current = this.head
            // this.head = newNode
            // this.head.next = current

            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    get(index){

        if(index < 0 || index > this.length) return null

        let current = this.head
        let count = 1
        while(count < index){


            current= current.next

            count++

        }
        return current

    }

    set(index,val){
        const resultNode = this.get(index)

        if(!resultNode){
            return false

        }
        
        resultNode.val =  val



        return true
    }

    insert(index, value){
        const newNode = new Node(value)
        if(index< 0 || index > this.length) return false
        if(index === this.length) return this.push(value)
        if(index === 0)  return  this.unshift(value)
       
           const prevNode =  this.get(index-1)
           const  {val, next} = prevNode

           //check again
         prevNode.next= newNode
           //

           newNode.next  = next

           

       
       this.length++
       return this


    }


    remove(index){

        if(index < 1 || index > this.length) return null
        if(index === 1) return this.shift()
        if(index === this.length) return this.pop()

        let prevNode = this.get(index - 1)
        let actualNode = prevNode.next
        let {val, next} =  prevNode

        next = actualNode.next
        this.length --
        return  next


    }


    print(){
        let arr = []
        let current = this.head
        while(current){

            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse(){
       
        let node = this.head
        this.head = this.tail
        this.tail =  node

        let prev = null
        let next

        for(let i = 0; i < this.length; i++){

            next = node.next
            node.next =prev
            prev = node
            node = next


        }
    }

}

let list = new SingleLinkedList()
list.push('Joye')
list.push('Show')
list.push('Tile')
list.push('4')
list.reverse()
// list.push('5')
// list.push('6')
// list.push('7')

// list.pop()
// console.log(list.insert(1,'2'))
// console.log(list.insert(8,'2'))
// console.log(list.insert(0,'Zero'))
// console.log(list.remove(2))




// list.traverse()
console.log(list)

