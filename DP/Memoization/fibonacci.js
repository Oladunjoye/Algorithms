function fibonacci(n, memo = {}){
 
  if(memo[n])return memo[n]
  if(n <= 1)return 1

let sum = fibonacci(n-1, memo) + (fibonacci(n-2),memo)
memo[n] = sum

return sum

}


console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(12))
console.log(fibonacci(23))
console.log(fibonacci(50))
