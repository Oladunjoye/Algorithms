const sumNumbers= (num) => {
//accepts a number input
// returns sum + recursion
// ends when the number gets to 0
let sum ; 
// if(num === 0) return sum

//  sum = num + sumNumbers(num -1)

//  return sum


 do(
    sum = num + sumNumbers(num -1)

 )
 while(num > 1)

}




console.log(sumNumbers(5))