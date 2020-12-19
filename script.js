// Assignment Code
// Clear the console on every refresh
console.clear();
var length = prompt("Select desired character count between 8 and 128")
  if length > 128 || < 8


// I want to create a password generator for 8-128 characters with selection -->
     
//     Get input to select if uppercase, numbers, special characters will be used -->
function myFunction () {
  var password = [];
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
  "number": [
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
  "symbol": [
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
    "'",
    "=",
    '"',
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
};
var children = password.concat(specialCharacter)
document.getElementById("").innerHTML = children;
}



//     Get input for length of password string

//     function with arrays for character selection


//     selected characters combined into one array

//     math.random same length of string output.

//    correlate math.random with possible characters 

//     output to text area (line 21)
//    DOM output for selected variables
const uppercaseEl = document.getElementById("upperCase");
const lowercaseEl = document.getElementById("lowerCase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
{
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;
	generatedPassword = true;
  resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
}


