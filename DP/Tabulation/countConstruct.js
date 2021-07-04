function countConstruct(target, wordBank) {
  let table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        let current = target.slice(0, i);
        let newString = current + word;
        if (target.startsWith(newString)) {
          table[i + word.length] += table[i];
        }
      }
    }
  }

  return table[target.length];
}

console.log(countConstruct('abc', ['ab', 'c', 'a', 'bc']));
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeef', [
    'eeeee',
    'eeeeeeee',
    'eeeeeeeeeeeeeeee',
    'c',
  ])
);
console.log(
  countConstruct('skateboard', ['bo', 'd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

// console.log('abc'.slice(0, 0) == "");
// console.log('abc'.slice(0, 1));
// console.log("abc".slice(0))
// console.log("abc".slice(0))
// console.log(""+"ab")
