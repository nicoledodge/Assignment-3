// Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// var passCriteria = prompt("Criteria?");
// var passLength = prompt("Choose a password length of 8-128 chracters");
var generateBtn = document.querySelector("#generate");

//write function for password length
// Add event listener to generate button- causes prompt to appear 
generateBtn.addEventListener("click", writePassword);


//how to store all availble characters - she would do global
//vars to store answers to confirm
//needs to go inside of a function-after a button
//logic of what to include and exclude
//randomly choose password characters from availble (limit to number user has chosen=128)(create prompts &confirm to ask user)
//math.random, for loops, array-concat

window.onload = alert("Welcome! Please click 'Generate password' to start!");

var generatePassword = function(){
  var allChar = [];
  var resultPass = "";
// add CSS to js
var Totlength = prompt("How many characters would you like your password to be?");

if(Totlength <8 || Totlength > 128){
    alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
}

// Confirm the rest of character conditions

else{
    if(confirm("Would you like your password to contain upper case letters?")){
        Array.prototype.push.apply(allChar, alphaUpper);
    }

    if(confirm("Would you like your password to contain lower case letters?")){
        Array.prototype.push.apply(allChar, alphaLower);
    }

    if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(allChar, number);
    }

    if(confirm("Would you like your password to contain symbols?")){
        Array.prototype.push.apply(allChar, specialChar);
    }

    if(allChar.length===0){
        alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
    }
    else{
      for(var i=0; i<Totlength; i++){
          var random = Math.floor(Math.random()*allChar.length);
          resultPass += allChar[random];
      }
  }
  }
  document.getElementById("password").innerHTML = resultPass;
}

// Write password to the #password input -done i think
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = resultPass;
}
