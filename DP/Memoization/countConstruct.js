function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let count = 0;
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      let newTarget = target.slice(word.length);
      let newCount = countConstruct(newTarget, wordBank, memo);
      if (newCount) {
        count += newCount;
        memo[target] = count;
      }
    }
  }

  memo[target] = count;
  return count;
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(
  countConstruct('skateboard', ['bo', 'd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'ee',
    'eeeeee',
    'eeeeeeeeee',
  ])
);
