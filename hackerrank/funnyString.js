/* 
https://www.hackerrank.com/challenges/funny-string/problem

In this challenge, you will determine whether a string is funny or not. 
To determine whether a string is funny, create a copy of the string in reverse e.g. abc => cba. 
Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 
0 and 1, 1 and 2 and so on to the end. 
If the list of absolute differences is the same for both strings, they are funny.

Determine whether a given string is funny. If it is, return Funny, otherwise return Not Funny.


- create a reversed copy
- create an array of asci values of both original and reversed
- create arrays of differences, and check for their equality
*/

const str = 'acxz';
// Funny

const str2 = 'bcxz';
// Not Funny

function funnyString(str) {
	// reverse the string and keep it in an array
	const reversed = str.split('').reverse();

	// Initialize the code arrays with set lengths because we know how long they will be
	let strCodes = Array(str.length);
	let reversedCodes = Array(str.length);

	// Place the corresponding ascii codes from original and reversed strings into their respective arrays
	for (let i = 0; i < strCodes.length; i++) {
		strCodes[i] = str[i].charCodeAt();
	}

	for (let i = 0; i < reversedCodes.length; i++) {
		reversedCodes[i] = reversed[i].charCodeAt();
	}

	// Initialize arrays to store the ascii code differences
	let strDiffs = [];
	let reversedDiffs = [];

	// Calculate the ascii code differences and push them into aforementioned arrays
	for (let i = 0; i < strCodes.length - 1; i++) {
		let current = strCodes[i];
		let next = strCodes[i + 1];
		strDiffs.push(Math.abs(next - current));
	}

	for (let i = 0; i < reversedCodes.length - 1; i++) {
		let current = reversedCodes[i];
		let next = reversedCodes[i + 1];
		reversedDiffs.push(Math.abs(next - current));
	}

	// Check for equality between the two arrays of ascii code differences
	for (let i = 0; i < strDiffs.length; i++) {
		if (strDiffs[i] !== reversedDiffs[i]) {
			return 'Not Funny';
		}
	}
	return 'Funny';
}

console.log(funnyString(str));
console.log(funnyString(str2));
