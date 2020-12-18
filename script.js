// Assignment Code

// I want to create a password generator for 8-128 characters with selection -->
    
//     Get input to select if uppercase, numbers, special characters will be used -->

//     Get input for length of password string

//     function with arrays for character selection

//     selected characters combined into one array

//     math.random same length of string output.

//    correlate math.random with possible characters 

//     output to text area (line 21)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
