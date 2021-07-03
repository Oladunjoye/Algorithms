function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target == '') return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      let newTarget = target.slice(word.length);
      if (canConstruct(newTarget, wordBank, memo) == true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;

  return false;
}

console.log(
  canConstruct('skateboard', ['bo', 'd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'ee',
    'eeeeee',
    'eeeeeeeeee',
  ])
);
