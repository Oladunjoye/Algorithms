//selections sort works similarly to bubble sort
// it sorts by bringing the smallest values to the beginning of the array per iteration
// it employs two loops
//the outer loop esnures all the iterations are run in the worst case scenario
// the inner loop makes the swaps and comparisons
// the index of the minimum value (initially the  i) is stored
// then comparisons are made with the subequent values
//and at the end of the iteration a swap is made with whatever the minimum is

function selectionSort(arr){

    const swap = (arr, i , j)=> {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    for(let i = 0; i< arr.length; i++){

    let min= i

        for(let j = i + 1; j< arr.length; j++){
            // console.log(arr,arr[j],arr[min])

            if(arr[j] < arr[min] ){

               min= j
            }
        }

        if(arr[i] !== arr[min])swap(arr,min, i)

    }

    return arr
}

console.log(selectionSort([2,1,24,25,8]))