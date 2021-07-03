function countConstruct(target, wordBank) {
  if (target === '') return 1;

  let count = 0;
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      let newTarget = target.slice(word.length);
      let newCount = countConstruct(newTarget, wordBank);
      if (newCount) {
        count += newCount;
      }
    }
  }

  return count;
}

// console.log(countConstruct("",[]))
console.log(
  countConstruct('skateboard', ['bo', 'd', 'ate', 't', 'ska', 'sk', 'boar'])
);
