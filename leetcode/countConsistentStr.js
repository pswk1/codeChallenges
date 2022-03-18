/* 
https://leetcode.com/problems/count-the-number-of-consistent-strings/

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
Return the number of consistent strings in the array words.
*/

const allowed1 = 'ab';
const words1 = ['ad', 'bd', 'aaab', 'baa', 'badab'];
// 2
const allowed2 = 'abc';
const words2 = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
// 7
const allowed3 = 'cad';
const words3 = ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'];
// 4

function countConsistentStrings(allowed, words) {
	let hash = new Map();
	let consistent = 0;

	for (const char of allowed) {
		hash.set(char, true);
	}

	function checkAllow(str) {
		for (const letter of str) {
			if (!hash.has(letter)) {
				return false;
			}
		}
		return true;
	}

	for (const str of words) {
		if (checkAllow(str)) {
			consistent++;
		}
	}
	return consistent;
}

console.log({
    test1: countConsistentStrings(allowed1, words1),
    test2: countConsistentStrings(allowed2, words2),
    test3: countConsistentStrings(allowed3, words3)
})
