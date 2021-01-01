/* 
https://www.hackerrank.com/challenges/alternating-characters/problem

You are given a string containing characters A and B only. 
Your task is to change it into a string such that there are no matching adjacent characters. 
To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.
*/

const str1 = 'AABAAB';
// 2
const str2 = 'ABABABAB';
// 0
const str3 = 'AAABBB';
// 4

function alternatingCharacters(str) {
	let last = str[0];
	let deletions = 0;
	for (let i = 1; i < str.length; i++) {
		if (last === str[i]) {
			deletions++;
		} else {
			last = str[i];
		}
	}
	return deletions;
}

console.log(alternatingCharacters(str1));
console.log(alternatingCharacters(str2));
console.log(alternatingCharacters(str3));
