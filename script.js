// Assignment Code


// I want to create a password generator for 8-128 characters with selection -->
    
//     Get input to select if uppercase, numbers, special characters will be used -->
var characters = {
  "lowerCase": [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  "upperCase": [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  ],
  "arabicNum": [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ],
  "specialCharacter": [
    " ",
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    ">",
    "=",
    "?",
    "@",
    "[",
    "]",
    "_",
    "`",
    "{",
    "}",
    "|",
    "~",
  ],
}



//     Get input for length of password string

//     function with arrays for character selection
var newPassword = {
  "selectedVar": [
    
  ]
}
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
