// Object containing arrays for possible characters and symbols
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


const uppercaseEl = document.getElementById("upperCase");
const lowercaseEl = document.getElementById("lowerCase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
var generateBtn = document.querySelector("#generate");

// called by on click event line 200
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// called by 118
function generatePassword() {
 
var password = ""
var lowerCase = false
var upperCase = false
var numbers = false
var symbol = false
var randomIndex = 0

 // creates prompt for input and subsequent alerts for options
  var length = prompt("Select desired character count between 8 and 128")
  length=parseInt(length)
  if ((length > 128) ||
    (length < 8)) {
    alert("Please enter a value between 8 and 128");
  } else {
    lowerCase = confirm("Use lower case?");
    upperCase = confirm("Use upper case?");
    numbers = confirm("Use numbers?");
    symbol = confirm("Use symbols?");

    for (var i = password.length; i < length; ) {
      var shufflePassword = password.split("")
      shufflePassword = shufflePassword.sort(function(){
        return Math.random()-0.5
      })
      password = shufflePassword.join("")
    if (lowerCase ){
      randomIndex = Math.floor(Math.random()* characters.lowerCase.length)
      password = password + characters.lowerCase[randomIndex]
      i = password.length
      if (i === length)
      {
        return password
      }
    } 
    if (upperCase){
      randomIndex = Math.floor(Math.random()* characters.upperCase.length)
      password = password + characters.upperCase[randomIndex]
      i = password.length
      if (i === length)
      {
        return password
      }
    } 
    if (numbers) {
      randomIndex = Math.floor(Math.random()* characters.number.length)
      password = password + characters.number[randomIndex]
      i = password.length
      if (i === length)
      {
        return password
      }
    }
    if (symbol) {
      randomIndex = Math.floor(Math.random()* characters.symbol.length)
      password = password + characters.symbol[randomIndex]
      i = password.length
      if (i === length)
      {
        return password
      }
    }

    

  }

}

return password

}

generateBtn.addEventListener("click", writePassword);
