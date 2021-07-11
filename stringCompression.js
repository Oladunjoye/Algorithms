function strCompr(arr) {
  let originalLength = arr.length;

  let current = arr[0];
  let start = 1;
  let end = 1;
  while (start < originalLength) {
    //check if el is equal to curr
    //ys: incr end  till no
    //when no
    // splice start till end/end-1 and replace with count
    //reset start to new end
  }
}

function stringCompr(chars) {
  let times = 1;
  for (let i = 1; i <= chars.length; i++) {
    console.log(chars[i-1]);
    if (chars[i - 1] == chars[i]) {
      while (chars[i - 1] == chars[i]) {
        chars.splice(i - 1, 1);
        times++;
      }
      let str = String(times);
      String(times)
        .split('')
        .reverse()
        .forEach((e) => {
          chars.splice(i, 0, e);
        });
      i++;
      times = 1;
    }
  }
}

console.log(stringCompr(['a', 'a', 'a', 'a', 'a', 'b', 'b']));
