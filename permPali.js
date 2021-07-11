function permPali(str) {
  str = str.toLowerCase();
  let map = {};
  let count = 0;
  for (let char of str) {
    if (char != ' ') {
      map[char] = map[char] ? map[char] + 1 : 1;
    }
  }

  console.log(map);

  for (key in map) {
    if (map[key] != 2) count++;
  }

  console.log(count);

  return count <= 1;
}

console.log(permPali('Tact Coa'));
