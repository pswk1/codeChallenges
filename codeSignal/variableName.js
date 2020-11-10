/* 
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.
*/

const name1 = 'var_1__Int';
// true
const name2 = 'qq-q';
// false
const name3 = '2w2';
// false

function variableName(name) {
	// this check for numbers will suffice since we don't have to worry about +/- Infinity
	if (name[0] == Number(name[0])) return false;
	const nameArr = name.split('');
	return nameArr.every(isValidVariableCharacter);
}

function isValidVariableCharacter(char) {
	if (char === '_') {
		return true;
	} else if (
		(char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
		(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
	) {
		return true;
	} else if (char == Number(char)) {
		return true;
	} else {
		return false;
	}
}

console.log(variableName(name1));
console.log(variableName(name2));
console.log(variableName(name3));
