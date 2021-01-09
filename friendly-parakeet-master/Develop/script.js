// Assignment code here
var passwordParameters = [{"Question": "Does your password require uppercase letters?"},
                          {"Question": "Does your password require lowercase letters?"},
                          {"Question": "Dooes your password require special characters?"},
                          {"Question": "Does your password require numbers?"}]
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
var passwordLength = 8
var newPassword = ""
var criteria = confirm(passwordParameters[i].Question)
var variety; 
var passwordLength = window.prompt("How long do you want your password to be?")

function randomNumber() {
  return Math.floor(Math.random() * (3)) + 1;
}
if(passwordLength < 8) {
  passwordLength = 8;
}
if(passwordLength > 128) {
  passwordLength = 128;
}

while(i <= passwordLength) {
  if(passwordParameters[0] === false) {
    var variety = randomNumber()
    if(variety = 1) {
      newPassword += lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
    }
    else {
      if(variety = 2) {
        newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length))
      }
      else {
        newPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
      }
    }
    }

  if(passwordParameters[1] === false) {
    var variety = randomNumber()
    if(variety = 1) {
      newPassword += upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
    }
    else {
      if(variety = 2) {
        newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length))
      }
      else {
        newPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
      }
    }
  }

  if(passwordParameters[2] === false) {
    var variety = randomNumber()
    if(variety = 1) {
      newPassword += lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
    }
    else {
      if(variety = 2) {
        newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length))
      }
      else {
        newPassword += upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
      }
    }
  }

  if(passwordParameters[3] === false) {
    var variety = randomNumber()
    if(variety = 1) {
      newPassword += lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
    }
    else {
      if(variety = 2) {
        newPassword += upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
      }
      else {
        newPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
      }
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
