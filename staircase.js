//  print a staircase of # values given a certain step value
let staircase = n => {
  // n determines the height of the array

  for (let i = 0; i < n; i++) {
    console.log("*");

    for (let j = 0; j < n; j++) {
      console.log("$");
    }
  }
};

staircase(3);
