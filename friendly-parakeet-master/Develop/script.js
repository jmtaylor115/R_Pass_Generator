// Assignment code here

//Variables and array declared
var criteriaUpperCase = confirm("Does your password require uppercase letters?")
var criteriaLowerCase = confirm("Does your password require lowercase letters?")
var criteriaSpecialChars = confirm("Does your password require special characters?")
var criteraNums = confirm("Does your password require numbers?")
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
var newPassword = "";
var passwordLength = window.prompt("How long do you want your password to be?")

//created function to generate a random number for the password generator to go with
var variety2 = 0
var variety3 = 0
var variety4 = 0

//Set up so that if numbers outside of the allowed length are entered a password with still generate
if(passwordLength < 8) {
  passwordLength = 8;
}
if(passwordLength > 128) {
  passwordLength = 128;
}
else {
  passwordLength = passwordLength
}

//Generator for the password
function generatePassword() {
  for(i=0; i<=passwordLength; i++) {
    variety2 = Math.floor(Math.random() * (2)) + 1;
    variety3 = Math.floor(Math.random() * (3)) + 1;
    variety4 = Math.floor(Math.random() * (4)) + 1;
    if(criteriaLowerCase == true && criteriaUpperCase == true && criteriaSpecialChars == true && criteraNums == true) {
      if(variety4 == 1) {
        newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
      }
      else {
        if(variety4 == 2) {
          newPassword = newPassword + lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
        }
        else {
          if(variety4 == 3) {
            newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
          }
          else {
            if(variety4 == 4) {
            newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))

            }
          }
        }
      }
    }
    else {  
      if(criteriaLowerCase == false && criteriaUpperCase == false && criteriaSpecialChars == false && criteraNums == false) {
        alert("You must choose at least one of the criteria. Refresh the page and try again, please.")
      }
      else {
        if(criteriaLowerCase == false && criteriaUpperCase == false && criteriaSpecialChars == false) {
          newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
        }
        else {
          if(criteriaLowerCase == false && criteriaUpperCase == false) {
            if(variety2 == 1) {
              newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
            }
            else {
              if(variety2 == 2) {
                newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
              }
            }
          }
          else {
            if(criteriaUpperCase == false) {
              if(variety3 == 1) {
                newPassword = newPassword + lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
              }
              else {
                if(variety3 == 2) {
                  newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
                }
                else {
                  newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
                }
              }
            }
            else {
              if(criteriaLowerCase == false && criteriaUpperCase == false && criteraNums == false) {
                if(variety3 == 1) {
                  newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.legnth))
                }
              }
              else {
                if(criteriaLowerCase == false && criteriaUpperCase == false) {
                  if(variety2 == 1) {
                    newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters))
                  }
                  else {
                    newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
                  }
                }
                else {
                  if(criteriaLowerCase == false) {
                    if(variety3 == 1) {
                      newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                    }
                    else {
                      if(variety3 == 2) {
                        newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
                      }
                      else {
                        newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
                      }
                    }
                  }
                  else {
                    if(criteriaUpperCase == false && criteriaSpecialChars == false && criteraNums == false) {
                      if(variety3 == 1) {
                        newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                      }
                      else {
                        if(variety3 == 2) {
                          newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
                        }
                        else {
                          newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
                        }
                      }
                    }
                    else {
                      if(criteriaUpperCase == false && criteriaSpecialChars == false) {
                        if(variety2 == 1) {
                          newPassword = newPassword + lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
                        }
                        else {
                          newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
                        }
                      }
                      else {
                        if(criteriaSpecialChars == false) {
                          if(variety3 == 1) {
                            newPassword = newPassword + lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
                          }
                          else {
                            if(variety3 == 2) {
                              newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
                            }
                            else {
                              newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                            }
                          }
                        }
                        else {
                          if(criteriaLowerCase == false && criteriaSpecialChars == false && criteraNums == false) {
                            newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                          }
                          else {
                            if(criteriaLowerCase == false&& criteriaSpecialChars == false) {
                              if(variety2 == 1) {
                                newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                              }
                              else {
                                newPassword = newPassword + numbers.charAt(Math.floor(Math.random() * numbers.length))
                              }
                            }
                            else {
                              if(criteriaNums == false) {
                                if(variety3 == 1) {
                                  newPassword = newPassword + lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
                                }
                                else {
                                  if(variety3 == 2) {
                                    newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                                  }
                                  else {
                                    newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
                                  }
                                }
                              }
                              else {
                                if(criteriaSpecialChars == false && criteraNums == false) {
                                  if(variety2 == 1) {
                                    newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                                  }
                                  else {
                                    newPassword = newPassword + lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
                                  }
                                }
                                else {
                                  if(criteriaUpperCase == false && criteraNums == false) {
                                    if(variety2 == 1) {
                                      newPassword = newPassword + lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
                                    }
                                    else {
                                    newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
                                    }
                                  }
                                  else {
                                    if(criteriaLowerCase == false && criteraNums == false) {
                                      if(variety2 == 1) {
                                        newPassword = newPassword + upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
                                      }
                                      else {
                                        newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
                                      }
                                    }
                                    else {
                                      if(criteriaLowerCase == false && criteriaSpecialChars == false) {
                                        if(variety2 == 1) {
                                          newPassword = newPassword + upperLetters.charAt(Math.floor*Math.random() * upperLetters.length)
                                        }
                                        else {
                                          newPassword = newPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }        
        }
      }
    }
  }
  return newPassword
}

localStorage.setItem('#password', newPassword)
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
