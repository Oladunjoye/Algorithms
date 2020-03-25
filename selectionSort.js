function selectionSort(arr){

    const swap = (arr, i , j)=> {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    for(let i = 0; i< arr.length; i++){

    let min= i

        for(let j = i + 1; j< arr.length; j++){
            console.log(arr,arr[j],arr[min])

            if(arr[j] < arr[min] ){

               min= j
            }
        }

        if(arr[i] !== arr[min])swap(arr,min, i)

    }

    return arr
}

console.log(selectionSort([2,1,24,25,8]))