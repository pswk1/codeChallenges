/* 
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the
resulting string to Ratiorg to figure out the total number of purchased items. 
Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers 
which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.
*/

const inputString = '42+781';
// 823

// const inputString = "abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -"
// 98

// const inputString = "123450";
// 123450

function sumUpNumbers(inputString) {
	const strNums = inputString.match(/\d+/g);
	if (strNums === null) {
		return 0;
	} else {
		return strNums.map(Number).reduce((a, b) => a + b);
	}
}

console.log(sumUpNumbers(inputString));
