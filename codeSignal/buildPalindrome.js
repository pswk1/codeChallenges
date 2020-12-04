/* 
Given a string, 
find the shortest possible string which can be achieved by adding characters 
to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".
*/

/* 
loop through the string and create a reversed chunk after each index
if the original string + the chunk forms a palindrome, return the combination

abcdc
1. abcdc + a = abcdca palindrome? no
2. abcdc + ba = abcdcba palindrome? yes
*/

const str = 'abcdc';
// abcdcba

function buildPalindrome(str) {
	if (checkForPalindrome(str)) return str;

	let chunk;

	for (let i = 0; i < str.length; i++) {
		chunk = str.substring(0, i).split('').reverse().join('');
		if (checkForPalindrome(str + chunk)) {
			return str + chunk;
		}
	}
}

const checkForPalindrome = (str) => str === str.split('').reverse().join('');

console.log(buildPalindrome(str));
