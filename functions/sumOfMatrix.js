/* 
    Problem
    create your own testing module ( which consists of test, expect, toBe and toNotBe functions )
    write a function find the sum of values in a matrix of size m , n
    if invalid values are passed in then return proper error messages as well
    write tests for the function
    think of the edge cases as well
    write 8 test cases for this
    make sure your functions accept values so as to do testing
*/

// give your matrix here
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumOfMatrix(matrix) {
  let sum = 0;
  for (let arr of matrix) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

function areAllElementsNumber(matrix) {
  let allElementsAreNumber = true;
  for (let arr of matrix) {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        console.log("All elements should be number in matrix.");
        allElementsAreNumber = false;
        break;
      }
    }
  }
  if (allElementsAreNumber) {
    sumOfMatrix(matrix);
  }
}

function isUndefined(matrix) {
  if (typeof matrix === "undefined") {
    console.log("Matrix is not defined");
    return true;
  } else {
    return false;
  }
}

function isEmpty(matrix){
    if(matrix.length == 0){
        console.log("Matrix is empty.")
        return true;
    }
}

if (!isUndefined(matrix) && !isEmpty(matrix)) {
  areAllElementsNumber(matrix);
}
