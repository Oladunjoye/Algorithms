// Direction
// Given a string return true if the string is a palindrome 

function Palindrome(str){
    debugger;
    return str ===  str.split('').reverse().join('')
}

function Palindrome2(str){
    let result= str.split('').every((char, index) => {
        return char ===  str[str.length - index]
    })
   return result
}

console.log(Palindrome('nursesrun'))