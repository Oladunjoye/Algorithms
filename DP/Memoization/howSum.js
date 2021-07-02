function howSum(numbers, target, memo= {}) {
  // base cases
  if(target in memo) return memo[target]
  if (target == 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let newTarget = target - num;

    let value = howSum(numbers, newTarget, memo);

    if (value) {
      value.push(num);

      memo[target] = value
      return value;
    }
  }

  memo[target] = null
  return null;
}

console.log(howSum([5, 3, 4, 7], 7));
console.log(howSum([3, 1], 7));
console.log(howSum([2, 3], 7));
console.log(howSum([3, 9], 7));
console.log(howSum([7,14], 300))
