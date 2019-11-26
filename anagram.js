function anagram(a, b) {
  let valueA = getFrequency(a);
  let valueB = getFrequency(b);
  console.log(valueA);
  console.log(valueB);

  if (valueA === valueB) {
    return true;
  } else {
    return false;
  }
}

function getFrequency(str) {
  let frequency = {};

  for (element of str) {
    frequency[element] = (frequency[element] || 0) + 1;
  }

  return frequency;
}

console.log(anagram("vista", "atsiv"));
