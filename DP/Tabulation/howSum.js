function howSum(target, numbers){

  let table = Array(target+1).fill(null)
  table[0] = []

  for(let i = 0; i <= target; i++){

    if(table[i]){
      for(let num of numbers){
        table[i+num] = [...table[i], num]
      }
    }

  }


  return table[target]

}



console.log(howSum(7,[2]))