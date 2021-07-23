
function merge(arr1, arr2){

    let newArr= []
    let i =0
    let j= 0

    while(i < arr1.length  && j < arr2.length  ){
        // console.log(arr1, arr2, arr1[i], arr2[j], newArr)
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }
        else{
            newArr.push(arr2[j])
            j++
        }
    }


    while(i < arr1.length){
        newArr.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        newArr.push(arr2[j])
        j++
    }

    return newArr

    
}


console.log(merge([1,3,6], [2,4,9,12,22]))