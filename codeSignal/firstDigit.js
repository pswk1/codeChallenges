/* 
Find the leftmost digit that occurs in a given string.

For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';

*/

const inputString1 = "var_1__Int";
const inputString2 = "q2q-q";

function firstDigit(inputString) {
	for (let i = 0; i < inputString.length; i++) {
		if (inputString[i] >= 0 && inputString[i] <= 9 && inputString[i] !== ' ') {
			return inputString[i];
		}
	}
}

console.log(firstDigit(inputString1), firstDigit(inputString2));
// 1 2