/* 
https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

A string is said to be a special string if either of two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
A special substring is any substring of a string which meets one of those criteria. Given a string, determine how many special substrings can be formed from it.



*/

let test1 = 'asasd';
// 7
let test2 = 'abcbaba';
// 10

let test3 = 'aaaa';
// 10

// Complete the substrCount function below.
function substrCount(str) {
	let counter = 0;

	for (let i = 0; i < str.length; i++) {
		counter++;

		for (let j = i + 1; j < str.length; j++) {
			if (str[i] !== str[j]) { // asasd
				if (
					2 * j - i < str.length &&
					str.substring(i, j) === str.substring(j + 1, 2 * j - i + 1)
				) {
					counter++;
					break;
				} else {
					break;
				}
			} else {
				counter++;
			}
		}
	}
	return counter;
}

console.log({
	test1: substrCount(test1),
	test2: substrCount(test2),
	test3: substrCount(test3),
});
