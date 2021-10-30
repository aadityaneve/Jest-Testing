/* 
    Problem
    write a function for converting time into a string
    it should accept in milliseconds
    return hours, minutes and seconds in string
    following are some examples
    write more test cases that cover all edge cases as well
*/

let time = 50000000;

function getTime(milliseconds) {
  if (milliseconds == 0) {
    return "0 miliseconds";
  } else {
    var seconds = parseInt(milliseconds / 1000) % 60;
    var minutes = parseInt(milliseconds / (1000 * 60)) % 60;
    var hours = parseInt(milliseconds / (1000 * 60 * 60)) % 24;
  }

  return hours+" hours "+minutes+" minutes "+seconds+" seconds";
}

// console.log(getTime(time));

module.exports = getTime;
