/* 
    Problem
    write a function that tests if a password is valid or not
    min 6 char, should contain a number, capital character, small caps character, and a symbol ( !@#$%^&*(),.<>/';:"][{}\|? )
    return proper error message for wrong inputs, ( like number is missing, symbol is missing etc.)
    write 10 test cases for it
    write your own functions
*/

function validatePassword(password) {
  if (password.length < 6) {
    return "Min 6 characters password required.";
  } else if (password.search(/[0-9]/) === -1) {
    return "Password must have 1 digit.";
  } else if (password.search(/[a-z]/) === -1) {
    return "Password must have 1 small letter.";
  } else if (password.search(/[A-Z]/) === -1) {
    return "Password must have 1 capital letter.";
  } else if (
    password.search(/[!\@\#\$\%\^\&\*\(\)\,\.\<\>\/\'\;\:\"\]\[\{\}\\\|\?]/) ===
    -1
  ) {
    return "Password must have 1 symbol.";
  } else {
    return "valid";
  }
}

module.exports = validatePassword;
