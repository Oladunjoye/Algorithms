// Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.

// Note: The function should return null if no unique number is found.

// Input #
// An array of integers

// Output #
// The first unique element in the array

// Sample Input #
// [9,2,3,2,6,6]
// Sample Output #
// 9

function findFirstUnique(arr) {
    let frequency = {}
    let result 
 
    for(let val of  arr){
 
       frequency[val] =  frequency[val] + 1 || 1 
 
    }
 
    for (let val of arr){
       if(frequency[val] === 1){
          result = val
          break
       }
    }
 

 
 
 
    return result;
 }