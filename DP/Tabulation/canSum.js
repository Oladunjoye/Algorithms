function canSum(target, numbers) {
  let table = Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target; i++) {
    if (table[i] == true) {
      for (let num of numbers) {
        if (i + num <= target) table[i + num] = true;
      }
    }
  }

  // console.log(table);
  return table[target];
}

// console.log(canSum(4, [1, 3,4, ]));
console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5])); //true
// console.log(canSum(5, [5, 3,4,7 ]));
