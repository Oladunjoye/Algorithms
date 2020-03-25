function insertionSort(arr){

    const swap = (arr, i ,j) => {
        [arr[i], arr[j]] = [arr[j],arr[i]]
    }

    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i]

        for(j= i- 1; j>= 0; j-- ){

            if(arr[j] < arr[i]){
                currentValue = arr[j]

            }

        }
       
        swap(arr, i,j-1)
    }


    return arr

}

console.log(insertionSort([3,2,5,6,1]))