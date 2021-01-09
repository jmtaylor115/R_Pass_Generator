// Assignment code here
var passwordParameters = [{"Question": "Does your password require uppercase letters?"},
                          {"Question": "Does your password require lowercase letters?"},
                          {"Question": "Dooes your password require special characters?"},
                          {"Question": "Does your password require numbers?"}]
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
var passwordLength = 8
var newPassword = ""
var criteria = confirm(passwordParameters[i].Question)


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
