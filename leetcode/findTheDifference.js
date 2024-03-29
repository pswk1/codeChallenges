/* 
https://leetcode.com/problems/find-the-difference/

You are given two strings s and t.
String t is generated by random shuffling string s and then add one more letter at a random position.
Return the letter that was added to t.

create a hash of the letters and their freqs, from the string s
loop through the letters of t and find one of the letters that is not found in s and return it

if we dont find one here,
we can create a hash of the letters and their freqs from the string t
compare it to the hash from s. find the letter in t whose freq is one more than its respective one in s
*/

const sTest1 = 'abcd';
const tTest1 = 'abcde';
// e
const sTest2 = '';
const tTest2 = 'y';
// y
const sTest3 = 'a';
const tTest3 = 'aa';
// a

function findTheDifference(s, t) {
	for (const letter of t) {
		if (!s.includes(letter)) {
			return letter;
		}
	}

	const sMap = {};
	const tMap = {};

	for (const letter of s) {
		sMap[letter] = (sMap[letter] || 0) + 1;
	}

	for (const letter of t) {
		tMap[letter] = (tMap[letter] || 0) + 1;
	}

	for (const [letter, freq] of Object.entries(tMap)) {
		if (freq === sMap[letter] + 1) {
			return letter;
		}
	}
}

const tests = {
    test1: { expected: 'e', received: findTheDifference(sTest1, tTest1) },
    test2: { expected: 'y', received: findTheDifference(sTest2, tTest2) },
    test3: { expected: 'a', received: findTheDifference(sTest3, tTest3) },
}

console.table(tests);