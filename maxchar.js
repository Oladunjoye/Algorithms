// // Directions/
// Given a String, return the most frequent character

function maxchar(str){
    let frequency = {}
    let max = 0
    for(char of str){
        frequency[char] = frequency[char] + 1 || 1
    }

    for(key in frequency){
        if(frequency[key] > max){
            max = frequency[key]
        }
    }
}