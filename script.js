// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {

  // Requirement Line 21 on "README.md"
  // 21: WHEN prompted for password criteria
  passLength = prompt("How many characters will your password be? (8-128 characters allowed)");

  // Requirement Line 24 on "README.md": 
  // Check to see if the user actually entered a length.
  // Keep in mind: If the user enters a non-number for the prompt, the program will still execute properly, 
  // but, the final output is an empty output which many lead into something not wanted correctly.
  while (passLength < 8 || passLength > 128) {
    alert("Enter a number between 8 and 128 for the password length.");
    passLength = prompt("How many characters will your password be? (8-128 characters allowed)");
  }

  // Requirement Line 23 on "README.md"
  // WHEN prompted for the length of the password
  alert("Your password lenght will be " + passLength + " characters long.");


  // Requirement Lines 20 & 26 on "README.md": 
  // 26: THEN I choose lowercase, uppercase, numeric, and/or special characters
  // 20: THEN I am presented with a series of prompts for password criteria
  // These are the strings of all the possible characters the password can contain.  
  // These strings were referenced from:
  // 1: https://www.owasp.org/index.php/Password_special_characters)
  // 2: https://webdevtrick.com/javascript-random-password-generator "I just didn't add a Password Length Bar or choice boxes for this HW"
  // However, the variable names and functions Iv'e done myself.
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers = "0123456789";
  specialChars = "!#'()*+@[_,-./:;<$%\]^&=>?`{|}~";
  var passArray = "";

  // Requirement Lines 22 and 27 on "README.md": 
  // 22: THEN I select which criteria to include in the password
  // 27: WHEN I answer each prompt
  // Note to coder/reader, If the user says "Cancel" to all of the prompts, then the final output will be ["undefined" repeated "passLength" number of times].
  // Also! This code is taken away from requirement 26 on chosing if certain criteria is picked.

  // 1) Special Characters
  specialConfirm = confirm("Do you want to use special characters? (e.g. !#'()*+@[_,-./:;<$%\]^&=>?`{|}~");
  if (specialConfirm == true) {
    passArray = passArray.concat(specialChars);
  }
  // 2) Numbers 
  numbersConfirm = confirm("Do you want to use numbers?");
  if (numbersConfirm == true) {
    passArray = passArray.concat(numbers);
  }

  // Requirement Lines 25, 28, 29 on "README.md": 
  //25 WHEN prompted for character types to include in the password
  //28 THEN my input should be validated and at least one character type should be selected
  //29 WHEN all prompts are answered
  // This is where all of the choices you make will determion how you want the password to come out.


  // 3) Lowercase
  lowerCaseConfirm = confirm("Do you want to use lowercase letters?");
  if (lowerCaseConfirm == true) {
    passArray = passArray.concat(lowerCase);
  }
  // 4) Uppercase
  upperCaseConfirm = confirm("Do you want to use uppercase letters?");
  if (upperCaseConfirm == true) {
    passArray = passArray.concat(upperCase);
  }


  // Requirement Lines 19, 30, and 31 on "README.md"
  //19: WHEN I click the button to generate a password
  //30: THEN a password is generated that matches the selected criteria
  //31: WHEN the password is generated
  finalPass = "";
  for (var i = 0; i < passLength; i++) {
    var randomPass = passArray[Math.floor(Math.random() * passArray.length)];
    finalPass = finalPass.concat(randomPass);
  }
  return finalPass;
};


// Requirement Line 18 on "README.md"
// GIVEN I need a new, secure password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Requirement Line 32 on "README.md"
//32: THEN the password is either displayed in an alert or written to the page
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);