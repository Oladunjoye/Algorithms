function fibonacci(n) {
  let array = Array(n + 1).fill(0);

  array[1] = 1;
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array[n];
}

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(50));
