/* 
https://www.hackerrank.com/challenges/pangrams/problem

A pangram is a string that contains every letter of the alphabet. 
Given a sentence determine whether it is a pangram in the English alphabet. 
Ignore case. Return either pangram or not pangram as appropriate.

Constraints: each character will be a-z or A-Z or space

- keep track of each letter seen in the string in a Map
- skip the spaces
- return whether the length of the keys is 26
*/

const s = 'We promptly judged antique ivory buckles for the next prize';
// pangram

const s2 = 'We promptly judged antique ivory buckles for the prize';
// not a pangram

function pangrams(str) {
	let letterMap = new Map();

	for (let i = 0; i < str.length; i++) {
		let current = str[i].toLowerCase();
		if (!letterMap.has(current)) {
			letterMap.set(current, 1);
		} else {
			letterMap.set(current, letterMap.get(current) + 1);
		}
	}

	return letterMap.size === 27 ? 'pangram' : 'not pangram';
}

console.log(pangrams(s));
console.log(pangrams(s2));
