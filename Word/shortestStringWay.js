function shortest(source, target) {
  const m = source.length;
  const n = target.length;
  let count = 0;

  let start_target = 0;

  while (start_target < n) {
    let end_target = start_target;

    for (let i = 0; i < m; i++) {
      // const sourceChar = source.charAt(i)
      const sourceChar = source[i];

      // console.log(sourceChar);
      // const targetChar = target.charAt(end_target)
      const targetChar = target[end_target];

      if (sourceChar == targetChar) end_target++;
    }

    if (end_target == start_target) return -1;
    start_target = end_target;
    count++;
  }
  return count;
}

console.log(shortest('abc', 'abcbc'));
// console.log(shortest("xyz", "xyzxy"))
console.log(shortest('abc', 'acdbc'));
