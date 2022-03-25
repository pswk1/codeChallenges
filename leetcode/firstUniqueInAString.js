/* 
https://leetcode.com/problems/first-unique-character-in-a-string/

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

const test1 = 'leetcode';
// 0
const test2 = 'loveleetcode';
// 2
const test3 = 'aabb';
// -1

const firstUniqueChar = (s) => {
	let map = new Map();

	for (const char of s) {
		map.set(char, (map.get(char) || 0) + 1);
	}

	let uniqueIndex = -1;

	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === 1) {
			uniqueIndex = i;
			break;
		}
	}

	return uniqueIndex;
};

const tests = {
    test1: { expected: 0, received: firstUniqueChar(test1) },
    test2: { expected: 2, received: firstUniqueChar(test2) },
    test3: { expected: -1, received: firstUniqueChar(test3) }
}

console.table(tests);