function frequency(array1, array2) {
  //loop the first array and get the value of the square and the frequency
  //then do the same for the second array and compare

  if (array1.length !== array2.length) {
    return false;
  }

  array1.forEach((element, i) => {
    // console.log(element, i);
    let correctPosition = array2.indexOf(element * 2);

    if (correctPosition === -1) {
      return false;
    }

    array2.splice(correctPosition);
  });

  return true;
}

console.log(frequency([1, 3, 3, 12], [1, 4, , 4, 9]));
