class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let n = this.values.length

    let parent  =Math.floor((n-1)/2)
    // compare value with parent

    while(this.values[n] < this.values[parent]){

      //swap 

      //update index

      
    }
    
  }
}
