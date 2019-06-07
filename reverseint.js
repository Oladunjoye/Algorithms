// Directions
// Given an integer reverse the value whilst factoring the Sign.
// the input and output should be integers

function reverseInt(int){
   let strInt = int.toString().split('').reverse().join('');
   return Math.sign(int) * parseInt(strInt)
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-315))
console.log(reverseInt(-90))
