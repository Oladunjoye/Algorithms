function same(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    let value = b.indexOf(a[i] * a[i]);
    if (value === -1) {
      return false;
    }
    b.splice(value, 1);
  }
  return true;
}

console.log(same([1, 25, 3], [1, 5, 9]));
