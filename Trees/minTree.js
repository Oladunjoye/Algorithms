class Node{
  constructor(val){
    this.left =  null
    this.right = null
    this.value = val
  }
}
function minTree(arr){


// if arr is empty return
//get root from given array
//set root.left = get root(new array)
//set root.right = get root(new array)


  function setRoot(arr){
//error check
//boundary check for mid values etc
    if(arr.length < 1) return

    let mid = getRoot(arr)
    let midValue = arr[mid]
   let root = new Node(midValue)
    
  // if(mid == arr.length) return
   root.left = setRoot(arr.slice(0, mid))
   root.right = setRoot(arr.slice(mid+1))



    return root

  }

  function getRoot(arr){

    let mid = Math.floor((arr.length-1)/2)

    return mid
  }

return setRoot(arr)

}

//[1,2,3,4,5,6,7,8]

//               4
//           2       6
//        1    3   5    7
//                         8


// //feels recursive//
// [1,2,3]
// 4
// [5 6 7 8]


console.log(minTree([1,2,3,4,5,6,7,8,9,19]))