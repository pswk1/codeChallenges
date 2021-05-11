/* 
https://leetcode.com/problems/merge-strings-alternately/

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
*/

const test1 = ['abc', 'pqr'];
// apbqcr
const test2 = ['ab', 'pqrs'];
// apbqrs
const test3 = ['abcd', 'pq'];
// apbqcd

function mergeAlternately([word1, word2]) {
	let merged = '';
	let i = 0;

	while (i < word1.length && i < word2.length) {
		merged += word1[i] + word2[i];
		i++;
	}

	let remainingChunk = '';

	if (word1.length > word2.length) {
		remainingChunk = word1.slice(i);
	} else {
		remainingChunk = word2.slice(i);
	}

	return merged + remainingChunk;
}

console.log({
	test1: mergeAlternately(test1),
	test2: mergeAlternately(test2),
	test3: mergeAlternately(test3),
});
