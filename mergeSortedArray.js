function mergeArrays(arr1, arr2) {

    // let length = arr1.length > arr2.l

let results = []
    
    if(arr1.length < 1)return arr2
    if(arr2.length < 1)return arr1

    let i = 0
    let j = 0

    while(i <= arr1.length && j <= arr2.length){
        console.log(i,j, arr1[i], arr2[j], results)
        if(arr1[i] <= arr2[j] && arr1[i] !== undefined){
            results.push(arr1[i])
            i++
        }
        else{
             arr2[j] && results.push(arr2[j])
             j++
        }
    }

    console.log('*******************************')
    return results;
}