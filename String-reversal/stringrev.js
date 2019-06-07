// Directions
//Given a string, return a new string with the reversed order of characters

function stringReverse(str){
    return str.split('').reverse().join('');
}

console.log(stringReverse('report'))