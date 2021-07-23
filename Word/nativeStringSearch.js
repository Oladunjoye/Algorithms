function nativeStringSearch(word, string){
    let counter =  0

for(let i = 0; i < word.length; i++){

    for(let j =  0; j < string.length; j++){
      
        if(string[j] !== word[i+j]) break
        

        if(j === string.length - 1)  counter++ 


    }
}
return counter

}

console.log(nativeStringSearch('binarybinaryrearmars', 'ar'))
console.log(nativeStringSearch('joyejoy', 'oy'))
// nativeStringSearch('revel', 'el')