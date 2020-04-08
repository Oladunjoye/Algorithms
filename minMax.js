
// Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have the second-largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order, and the even-numbered indices will have the smallest numbers in ascending order.

// Note: The given array is sorted in ascending order.

// Input #
// A sorted array

// Output #
// An array with elements stored in max/min form

// Sample Input #
// arr = [1,2,3,4,5]
// Sample Output #
// arr = [5,1,4,2,3]




function maxMin(arr){ 

    let result = []
    let i = 0; 
        j =  arr.length -1
  
        while(i <= j){
  
          if(i === j){
            result.push(arr[i])
          }
          else{
          result.push(arr[j])
          result.push(arr[i])
          }
          i++
          j--
        }
    return result;
  }