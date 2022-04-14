/* 
https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

const test1 = "Let's take LeetCode contest";
// "s'teL ekat edoCteeL tsetnoc"
const test2 = 'God Ding';
// "doG gniD"

function reverseWords(s) {
	let arr = s.split(' ');
	let result = [];

	for (const word of arr) {
		result.push(reverseStr(word));
	}

	return result.join(' ');
}

function reverseStr(str) {
	let result = '';

	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}

	return result;
}

const tests = {
	test1: {
		expected: "s'teL ekat edoCteeL tsetnoc",
		received: reverseWords(test1),
	},
	test2: { expected: 'doG gniD', received: reverseWords(test2) },
};

console.table(tests);
