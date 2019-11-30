// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(a, b) {
  return a.toLowerCase(",");
}
console.log(anagrams("joye", "joy"));
// function anagrams(str1, str2){

//    let stringA = Slim(str1).split('').sort().join('')
//    let stringB = Slim(str2).split('').sort().join('')

//     function Slim(str){
//         return str.replace(/[^\w]/g, '').toLowerCase()
//     }

//     return stringA === stringB
// }

// function anagrams(A, B) {
// //   remove spaces and punctuations with regex and convert to lower case
// let stringA = A.toLowerCase()
// let stringB = B.replace(/[^\w]/g, '').toLowerCase()

// return SortLetters(stringA) === SortLetters(stringB)

// function SortLetters(str){
//     return str.split('').sort().join('')
// }

// }

module.exports = anagrams;
