
// Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, and all positive elements appear at the right.

// While zero is NOT positive or negative, we consider zero to be a positive​ integer for this challenge!

// Input #
// An array containing positive and negative elements

// Output #
// A sorted array with negative elements at the left and positive elements at the right

// Sample Input #
// [10,-1,20,4,5,-9,-6]
// Sample Output #
// [-1,-9,-6,10,20,4,5]





function reArrange(arr) {

    let newArr= [...arr]
      for(let i = arr.length; i > -1; i--){
        if(newArr[i] < 0){
          let val = newArr[i]
          newArr.splice(i,1)
    
          newArr.splice(0,0,val)
        }
    
      }
      return newArr;
    }