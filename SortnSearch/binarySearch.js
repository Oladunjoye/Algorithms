function binarySearch(arr, val){

let left = 0
let right =  arr.length - 1
let middle = Math.floor((left + right) /2)

while(arr[middle] !== val && left < right){

    if(arr[middle] < val){
        left = middle + 1
    }

    else{
        right = middle - 1
    }

     middle = Math.floor((left + right) /2)

    
}

return arr[middle] === val ? middle : -1

}

console.log(binarySearch([1,2,3,4,5], 4))