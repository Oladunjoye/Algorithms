// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let freq = {}
    let max = 0
    let maxChars = 'aa'

    for(char of str){
        freq[char] =  freq[char] + 1 || 1
    }

    for( val in freq){
        if(freq[val] > max){
            max = freq[val]
            maxChars =  val
        }
    }
    console.log(freq)
    return maxChars
}

console.log(maxChar('abcdefghijklmnaaaaa'))

module.exports = maxChar;
