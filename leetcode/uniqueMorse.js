/* 
https://leetcode.com/problems/unique-morse-code-words/

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.
*/

const test1 = ['gin', 'zen', 'gig', 'msg'];
// 2

// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

const test2 = ['a'];
// 1

function uniqueMorse(words) {
	const morse = [
		'.-',
		'-...',
		'-.-.',
		'-..',
		'.',
		'..-.',
		'--.',
		'....',
		'..',
		'.---',
		'-.-',
		'.-..',
		'--',
		'-.',
		'---',
		'.--.',
		'--.-',
		'.-.',
		'...',
		'-',
		'..-',
		'...-',
		'.--',
		'-..-',
		'-.--',
		'--..',
	];
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	let map = new Map();

	for (let i = 0; i < alphabet.length; i++) {
		if (!map[alphabet[i]]) {
			map[alphabet[i]] = morse[i];
		}
	}

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].split('');

		for (let j = 0; j < words[i].length; j++) {
			words[i][j] = map[words[i][j]];
		}
		words[i] = words[i].join('');
	}

	return new Set(words).size;
}

const tests = {
    test1: { expected: 2, received: uniqueMorse(test1) },
    test2: { expected: 1, received: uniqueMorse(test2) },
}

console.table(tests);