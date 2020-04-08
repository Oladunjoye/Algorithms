function findSecondMaximum(arr) {
    
    // arr.sort((a,b) => a-b)

    let frequency = {}
 
    for(let val of  arr){
 
       frequency[val] =  frequency[val] + 1 || 1 
 
    }
 
    let result = Object.keys(frequency)

    console.log(result)

    if(result.length > 3){
        return result[arr.length-2]
    }
    
    else if(result.length === 3){
        return result[1]
    }

    else{
        return result[0]
    }
}