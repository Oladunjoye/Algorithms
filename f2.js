function same(a, b) {
  if (a.length !== b.length) return false;

  let frequencyObjA = getFrequency(a);
  let frequencyObjB = getFrequency(b);

  for (let key in frequencyObjA) {
    if (!frequencyObjB[key ** 2]) {
      return false;
    }

    if (frequencyObjB[key ** 2] !== frequencyObjA[key]) {
      return false;
    }
  }
  return true;
}

function getFrequency(array) {
  let frequency = {};

  for (element of array) {
    frequency[element] = (frequency[element] || 0) + 1;
  }

  return frequency;
}

console.log(same([1, 1, 2, 5], [1, 1, 10, 25]));
