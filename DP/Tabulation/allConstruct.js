function allConstruct(target, wordBank) {
  let table = Array(target.length + 1).fill().map(()=> []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        let current = target.slice(0, i);
        let newString = current + word;
        if (target.startsWith(newString)) {
          // table[i + word.length] += table[i];
          let suffixWays =  table[i].map((way)=> [...way, word])
          table[i + word.length].push(...suffixWays);
        }
      }
    }
  }

  return table[target.length];
}

console.log(allConstruct('abc', ['ab', 'c', 'a', 'bc']));
console.log(
  allConstruct('eeeeeeeeeeeeeeeeeef', [
    'eeeee',
    'eeeeeeee',
    'eeeeeeeeeeeeeeee',
    'c',
  ])
);
console.log(
  allConstruct('skateboard', ['bo', 'd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

// console.log('abc'.slice(0, 0) == "");
// console.log('abc'.slice(0, 1));
// console.log("abc".slice(0))
// console.log("abc".slice(0))
// console.log(""+"ab")
