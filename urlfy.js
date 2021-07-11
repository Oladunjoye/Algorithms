function urlify(str, length) {
  let strArr = str.split('');

  for (let i = 0; i < strArr.length-1; i++) {
    if (strArr[i] == ' ' && strArr[i + 1] != ' ') {
      strArr[i] = '%20';
    }
  }
  console.log(strArr);
  return strArr.join('');
}

// console.log("abc de f  ".split(""))
console.log(urlify('Mr John Smith   ', 13));
