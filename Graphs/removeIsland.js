function setBorder(matrix, i, j, source = 1, target = 2) {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] == 0
  ) {
    console.log(i, j);
    return;
  }

  matrix[i][j] = 2;

  setBorder(matrix, i + 1, j);
  setBorder(matrix, i - 1, j);
  setBorder(matrix, i, j - 1);
  setBorder(matrix, i, j + 1);
}

// 1 0 0 1
// 0 1 0 0
// 0 0 0 0
// 0 0 0 1
let test1 = [
  [1, 1, 1, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];

let test = [
  [0, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
];
for (let i = 0; i < test.length; i++) {
  for (let j = 0; j < test[i].length; j++) {
    if (
      (i == 0 || j == 0 || i == test.length - 1 || j == test[i].length - 1) &&
      test[i][j] === 1
    ) {
      // console.log(i, j);
      setBorder(test, i, j);
    }
  }
}

console.log(test);

// console.log(i,j)
// if(i > 0){
// 	console.log(matrix[i])
// }
