// Assignment code here
var characterLength = 8-128;
var passwordDatabase = [];

var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','=','{','}',':','<','>','?',];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
     var newPassword = generatePassword();
      passwordText.value = newPassword;
  } else {
       passwordTest.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
      var randomIndex = Math.floor(Math.random() * passwordDatabase.length);
      password = password + passwordDatabase[randomIndex];
  }
  return password;
  }
  
  function getPrompts(){
    passwordDatabase = [];

    characterLength = parseInt(prompt("choose amount of characters (8-128)"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128)  {
      alert("Character length has to be a number between 8 - 128 digits. please re-enter digit length");
    return false; 
}
if (confirm("Would you like lowercase letters in new password?")){
  passwordDatabase = passwordDatabase.concat(lowercase);
}
if (confirm("Would you like UPPERCASE letters in new password?")){
  passwordDatabase = passwordDatabase.concat(uppercase);
}
if (confirm("Would you like numbers in new password?")){
  passwordDatabase = passwordDatabase.concat(numbers);
}
if (confirm("Would you like special characters in new password?")){
  passwordDatabase = passwordDatabase.concat(specialCharacters);
}
return true;
}
