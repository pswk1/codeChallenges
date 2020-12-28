/* 
https://www.hackerrank.com/challenges/weighted-uniform-string/problem?h_r=next-challenge&h_v=zen

A weighted string is a string of lowercase English letters where each letter has a weight. 
Character weights are a to z from 1 to 26.
The weight of a string is the sum of the weights of all the string's characters.

A uniform string consists of a single character repeated zero or more times. For example, ccc and a are uniform strings, but bcb and cd are not.
Given a group of weights, indicate whether those weights are present in the possible uniform string weights in the input.
*/

const str = 'abccddde';
const queries = [1, 3, 12, 5, 9, 10];
// [Yes, Yes, Yes, Yes, No, No]

const str2 = 'aaabbbbcccddd';
const queries2 = [9, 7, 8, 12, 5];
// [Yes, No, Yes, Yes, No]

const str3 = 'l';
const queries3 = [1, 12];
// [No, Yes]

function weightedUniformStrings(str, queries) {
	let letterWeights = new Map();

	for (let i = 97; i <= 122; i++) {
		letterWeights.set(String.fromCharCode(i), i - 96);
	}

	let uniformStringWeightCheck = [];

	if (str.length === 1) {
		for (let i = 0; i < queries.length; i++) {
			if (queries[i] === letterWeights.get(str)) {
				uniformStringWeightCheck.push('Yes');
			} else {
				uniformStringWeightCheck.push('No');
			}
		}
		return uniformStringWeightCheck;
	}

	let uniques = [...new Set(str)];
	let uniformStringWeights = [];

	for (let i = 0; i < uniques.length; i++) {
		uniformStringWeights.push(letterWeights.get(uniques[i]));
	}

	let longestUniformStrings = str.match(/([a-z])\1+/gi);

	for (let i = 0; i < longestUniformStrings.length; i++) {
		let current = longestUniformStrings[i];

		for (let j = 0; j < current.length; j++) {
			uniformStringWeights.push(letterWeights.get(current[j]) * (j + 1));
		}
	}

	for (let i = 0; i < queries.length; i++) {
		if (uniformStringWeights.includes(queries[i])) {
			uniformStringWeightCheck.push('Yes');
		} else {
			uniformStringWeightCheck.push('No');
		}
	}

	return uniformStringWeightCheck;
}

console.log(weightedUniformStrings(str, queries));
console.log(weightedUniformStrings(str2, queries2));
console.log(weightedUniformStrings(str3, queries3));
