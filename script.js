// Password Variables
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbol = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ';']
var char = []

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var passwordLength = parseInt(prompt("chose your password length to be at least 8 and no more than 129") )
  if (passwordLength < 8 || passwordLength > 129 || passwordLength === "" || passwordLength === null || isNaN(passwordLength) ){
    alert("please enter a valid password lenght")
return generatePassword();

  }
  var PasswordUpper = confirm ("Do you prefer upperCases");
  var PasswordLower = confirm("Do you prefer LowerCase");
  var PasswordNumber = confirm("Do you Prefer Numbers");
  var PasswordSpecial = confirm("Do you Prefer Special Character");
  if (!PasswordUpper && !PasswordLower && !PasswordNumber && !PasswordSpecial) {
    alert("Please Enter A Vaild Select");
    return generatePassword();
  }
  
  var selection = [] 
  if (PasswordUpper){
    selection = selection.concat(upperCase);
  }
  if (PasswordLower){
    selection = selection.concat(lowerCase);
  }
  if (PasswordNumber){
    selection = selection.concat(number);
  }
  if (PasswordSpecial){
    selection = selection.concat(symbol);
  }
  console.log(selection); 
  for (var i = 0; i < passwordLength; i++) {
    var randomnum = Math.floor(Math.random() * selection.lenght);
    var randomSelection = selection[randomnum];
    char.push(randomSelection);

  }
  return char.join("");

}

console.log(char);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
