/* 
https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

*/

const test1 = 4;
// xxxy
const test2 = 2;
// xy
const test3 = 7;
// xxxxxxx

function generateString(n) {
	const x = 'x';
	const y = 'y';

	if (n % 2 === 0) {
		return x.repeat(n - 1) + y;
	}

	return x.repeat(n);
}

console.log({
	test1: generateString(test1),
	test2: generateString(test2),
	test3: generateString(test3),
});
