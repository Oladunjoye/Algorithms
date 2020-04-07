// Implement a function findMinimum(arr) that finds the smallest number in the given array.

// Input #
// An array of integers

// Output #
// The smallest number in the array

// Sample Input #
// arr = [9,2,3,6]
// Sample Output #
// 2


function findMinimum(arr) {

    let min  = arr[0]
 
    for(let val of arr){
       if(val < min){
          min = val
       }
    }
    return min;
 }