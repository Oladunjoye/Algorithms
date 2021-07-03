function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target == '') return [[]];

  let result = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      let newTarget = target.slice(word.length);
      let combination = allConstruct(newTarget, wordBank);
      let newWay = combination.map((way) => [word, ...way]);

      result.push(...newWay);
      memo[target] = result;
    }
  }
  memo[target] = result;
  return result;
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

// console.log(allConstruct("", [""]))
