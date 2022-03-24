/* 
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

const test1 = 'A man, a plan, a canal: Panama';
// true
// Explanation: "amanaplanacanalpanama" is a palindrome.
const test2 = 'race a car';
// false
const test3 = ' ';
// true

// Brute force / initial approach:

function isPalindrome(s) {
	if (s === ' ') return true;

	let lower = s.toLowerCase();
	let arr = lower.split('');
	let valid = arr
		.filter((char) => {
			let code = char.charCodeAt();
			return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
		})
		.join('');

	for (let i = 0, j = valid.length - 1; i <= j; i++, j--) {
		if (valid.charCodeAt(i) !== valid.charCodeAt(j)) return false;
	}
	return true;
}

// More efficient:

// const isPalindrome = (s) => {
// 	s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
// 	for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
// 		if (s.charAt(i) !== s.charAt(j)) return false;
// 	}
// 	return true;
// };

const tests = {
	test1: { expected: true, received: isPalindrome(test1) },
	test2: { expected: false, received: isPalindrome(test2) },
	test3: { expected: true, received: isPalindrome(test3) },
};

console.table(tests);
