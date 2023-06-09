// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var number = ["0","1","2","3","4","5","6","7","8","9"]
var lowerletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialchar = ["!","@","#","$","%","^","&","*","<",">","?","~","/",".","-","+",","]

var confirmlength = "";
var confirmnumber;
var confirmupper;
var confirmunder;
var confirmspecialchar;

function generatepassword() {
  var confirmlength = (prompt("how many characters do you want in your password?"));

  while (confirmlength <= 7 || confirmlength >= 129) {
    alert("password length should be in btween 8 to 128 characters.")
    var confirmlength = (prompt("how many characters do you want in your password?"));
  }
  
  alert(`Your password will have ${confirmlength} characters`);

  var confirmnumber = confirm("click ok if you want numbers in password");
  var confirmupper = confirm("click ok if you want upper case characters");
  var confirmunder = confirm("click ok if you want lower case characters");
  var confirmspecialchar = confirm("click ok if you want special characters");
while (confirmnumber === false && confirmupper === false && confirmunder === false && confirmspecialchar === false) {
  alert("You must choose at least one parameter");
  var confirmnumber = confirm("click ok if you want numbers in password");
  var confirmupper = confirm("click ok if you want upper case characters");
  var confirmunder = confirm("click ok if you want lower case characters");
  var confirmspecialchar = confirm("click ok if you want special characters");
}

var passwordcharacters = ""

if (confirmnumber) {
  passwordcharacters = passwordcharacters.concat(number)
}

if (confirmupper) {
  passwordcharacters = passwordcharacters.concat(upperletter)
}

if (confirmunder) {
  passwordcharacters = passwordcharacters.concat(lowerletter)
}

if (confirmspecialchar) {
  passwordcharacters = passwordcharacters.concat(specialchar)
}

var randompassword = ""

for (var i = 0; i < confirmlength; i++) {
  randompassword = randompassword + passwordcharacters[Math.floor(Math.random() * passwordcharacters.length)];
}

return randompassword;

}

function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}