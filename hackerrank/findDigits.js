/* 
https://www.hackerrank.com/challenges/find-digits/problem

An integer d is a divisor of an integer n if the remainder of n / d = 0.
Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted.
*/

const n = 1012;
// 3

function findDigits(n) {
	let arr = `${n}`.split('');
	let divisorCount = 0;
	let currentNum;

	// Thanks to implicit type coercion, we can save some time by not having to convert each string back to a number,
	// However, we should convert it back in normal cases

	for (let i = 0; i < arr.length; i++) {
		currentNum = arr[i];
		if (n % currentNum === 0) {
			divisorCount++;
		}
	}

	return divisorCount;
}

console.log(findDigits(n));
