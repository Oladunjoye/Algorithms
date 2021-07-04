function canConstruct(target, wordBank) {
  let table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        let current = target.slice(0, i);
        let newString = current + word;
        if (target.startsWith(newString)) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
}

console.log(canConstruct('abc', ['ab', 'c']));
// console.log('abc'.slice(0, 0) == "");
// console.log('abc'.slice(0, 1));
// console.log("abc".slice(0))
// console.log("abc".slice(0))
// console.log(""+"ab")
