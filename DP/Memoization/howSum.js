function howSum(numbers, target) {
  // base cases
  if (target == 0) return [];
  if (target < 0) return null;

  let result = [];
  for (let num of numbers) {
    let newTarget = target - num;

    let value = howSum(numbers, newTarget);

    if (value) {
      value.push(num);
      return value;
    }
  }

  return null;
}

console.log(howSum([5, 3, 4, 7], 7));
console.log(howSum([3, 1], 7));
console.log(howSum([2, 3], 7));
console.log(howSum([3, 9], 7));
console.log(howSum([7,14], 300))
