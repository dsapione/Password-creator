// Assignment code here
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerStr = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerStr.split('');
var upperStr = lowerStr.toUpperCase();
var upperArray = upperStr.split('');
var specialStr = "!#$%&()*+-/:;<=>?@[]/^{|}~";
var specialArray = specialStr.split('');
var totalArray = [];
var rando = '';

function generatePassword() {
	if (rando.length > 0) {
		rando = '';
	}

	var passLngth = parseInt(window.prompt('How many characters do you want your password to have?'));

	if (isNaN(passLngth) || passLngth < 8 || passLngth > 128) {
		alert('Must between 8 and 128 characters.');
		return askUser();
	}

	var isLower = confirm('Would you like your password to contain lowercase letters?');
	var isUpper = confirm('Would you like your password to contain UPPERCASE letters?');
	var isNum = confirm('Would you like your password to contain numbers?');
	var isSpecial = confirm('Would you like your password to contain special charaters?');

	if (isLower) {
		totalArray = totalArray.concat(lowerArray);
	}
	if (isUpper) {
		totalArray = totalArray.concat(upperArray);
	}
	if (isNum) {
		totalArray = totalArray.concat(numArray);
	}
	if (isSpecial) {
		totalArray = totalArray.concat(specialArray);
	}
	if (totalArray.length === 0) {
		alert('Password must contain at least one character.');
		return askUser();
	}

	for (var i = 0; i < passLngth; i++) {
		var value = Math.floor(Math.random() * totalArray.length);
		rando = rando + totalArray[value];
	}
	return rando;

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