//Description
//bubble sort performs by bubbling the highest values to the end of the array
//it uses two loops to track the original value and the subsequent compared values
//it then swaps the the values depending on the magnitude


//an unoptimized version of the bubble sort algorithm
function bubbleSort1(arr){

    for(let i  = 0; i< arr.length; i++){

        for(let j= 0; j < arr.length; j++){

            if(arr[j] > arr[j+1]){
            let temp=  arr[j]
            arr[j] =  arr[j+1]
            arr[j+1] = temp
            }
        }
    }

    return arr

}


// console.log(bubbleSort1([2,18,4,50,27]))

// a more efficient solution
function bubbleSort2(arr){

    for(let i  = arr.length; i> 0; i--){

        for(let j= 0; j < i; j++){

            if(arr[j] > arr[j+1]){
            let temp=  arr[j]
            arr[j] =  arr[j+1]
            arr[j+1] = temp
            }
        }
    }

    return arr

}


//  using es6 notation and further optimization

const  bubbleSort3 = (arr) => {
 const swap = (arr,val1, val2) => { 
     [arr[val1], arr[val2]] = [arr[val2],arr[val1]]
 }

 let noSwaps = true

 for(let i = arr.length ; i> 0 ; i--){

    for(let j = 0; j< i; j++){
     if(arr[j] > arr[j+1]){
         swap(arr, j, j+1)
         noSwaps = false;
     }

    }

    if(noSwaps)break
 }

 return arr

}
// console.log(bubbleSort1([2,18,4,50,27,1, 11, 20, 87]))

// console.log(bubbleSort2([2,18,4,50,27,1, 11, 20, 87]))
console.log(bubbleSort3([2,18,4,50,27,1, 11, 20, 87]))

