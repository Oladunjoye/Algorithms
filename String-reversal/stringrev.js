// Directions
//Given a string, return a new string with the reversed order of characters

function stringReverse(str){
    return str.split('').reverse().join('');
}


function stringReverse2(str){
    let reversed =''

    for(char of str){
        reversed = char + reversed
    }
    return reversed
}
console.log(stringReverse2('character'))