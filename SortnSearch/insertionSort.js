function insertSort(arr){

  for(let i= 0; i < arr.length ; i++ ){
    let current = arr[i]

    for(var j = i-1 ; j >=0 && arr[j] > current; j--){
      [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
    }

  }
  return arr
}

console.log(insertSort([1,7,2,6,-1,10,3]))


