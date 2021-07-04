function bestSum(target, numbers) {
  let table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let num of numbers) {
        let newCombination = [...table[i], num];
        if(  table[i + num]  == null || newCombination.length <= table[i + num].length ){
          table[i + num] = newCombination;

        }
      }
    }
  }
  return table[target];
}

console.log(bestSum(7, [1,3, 4,7]));
console.log(bestSum(8, [2,3, 5]));

