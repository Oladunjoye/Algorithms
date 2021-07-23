// Implement a function rightRotate(arr,n) that will rotate the given array by n.

// Input #
// An array and a number by which to rotate that array

// Output #
// The given array rotated by n elements

// Sample Input #
// arr = [1,2,3,4,5]
// n = 3
// Sample Output #
// arr = [3,4,5,1,2]

function rightRotate(arr,n){

    count = 1
    let length =  arr.length
    
      while( count <= n){
        let last = arr[length - 1]
        arr.pop(length)
        arr.unshift(last)
        count++
      }
      return arr; 
    }