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
let matrix;

function sumOfMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

function test(str, fn) {
  console.log(str);
  fn();
}

// function expect(value) {
//   function toBe(result) {
//     if (typeof value === result) {
//       console.log("Accepted");
//       console.log("Sum is : ", sumOfMatrix(matrix));
//     }
//     // else if (typeof value != result) {
//     //   console.log(`Expected: ${result}, output: ${value}`);
//     // }

//     if (typeof value === result) {
//       console.log(`Matrix is undefined - Expected: ${[]}, output: ${result}`);
//     }
//   }
//   return { toBe };
// }

// test("Sum of matrix:", () => {
//   if (matrix != undefined) {
//     expect(sumOfMatrix(matrix)).toBe("number");
//   }else{
//       console.log("-")
//   }
// });

// test("Matrix undefined:", () => {
//   if (matrix == undefined) {
//     expect(matrix).toBe(undefined);
//   }
// });
