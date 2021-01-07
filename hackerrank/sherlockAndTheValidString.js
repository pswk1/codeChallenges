/* 
Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
It is also valid if he can remove just 1 character at 1 index in the string, 
and the remaining characters will occur the same number of times. Given a string , determine if it is valid. 
If so, return YES, otherwise return NO.

- create a Map of each letter and its frequency
- if they all have the same frequency, it is valid 
- if there is just one frequency that is different, 
it must be only one greater than the other and there may only be one letter that has this frequency.
- all other strings are not valid
important: we are able to remove all occurences of the same letter. (instruction does not reflect this)
*/

const str1 = 'aabbcd';
// NO

const str2 = 'aabbccddeefghi';
// NO

const str3 = 'abc';
// YES

const str4 = 'abcdefghhgfedecba';
// YES

function isValid(str) {
	let letterMap = new Map();

	for (const letter of str) {
		letterMap.set(letter, (letterMap.get(letter) || 0) + 1);
	}

	let differCount = 0;
	const frequencies = [...letterMap.values()];
	const freqToCompare = frequencies[0];

	frequencies.forEach((freq) => {
		if (freq !== freqToCompare) differCount++;
	});

	if (differCount <= 1) {
		return 'YES';
	} else {
		return 'NO';
	}
}

console.log(isValid(str1));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));
