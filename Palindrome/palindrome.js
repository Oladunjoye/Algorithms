// Direction
// Given a string return true if the string is a palindrome 

function Palindrome(str){
    debugger;
    return str ===  str.split('').reverse().join('')
}

console.log(Palindrome('abba'))