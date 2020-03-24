function linearSearch(array, value){

    let index= -1
for(let i = 0; i< array.length; i++){
    if(array[i] === value){
        index = i
    }


    }

    return index
}



console.log(linearSearch([1,2,4,5,6], 5))
console.log(linearSearch([1,2,4,5,6], -5))
