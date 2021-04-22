/* 
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, 
return true if sentence is a pangram, or false otherwise.
*/

const test1 = 'thequickbrownfoxjumpsoverthelazydog';
// true

const test2 = 'leetcode';
// false

// Similar speed, but using a Set will use more memory
// const checkIfPangram = sentence => new Set(sentence).size >= 26

function checkIfPangram(sentence) {
	let letterMap = new Map();

	for (const letter of sentence) {
		letterMap.set(letter, (letterMap.get(letter) || 0) + 1);
	}

	return letterMap.size >= 26;
}

console.log([checkIfPangram(test1), checkIfPangram(test2)]);
