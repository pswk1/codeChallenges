/* 
https://www.hackerrank.com/challenges/making-anagrams/problem?h_r=next-challenge&h_v=zen

Alice is taking a cryptography class and finding anagrams to be very useful. 
She decides on an encryption scheme involving two large strings where encryption is dependent on 
the minimum number of character deletions required to make the two strings anagrams. 
Can you help her find this number?

- Create a Map of each letter and its frequency
- Initialize a variable to keep track of number of deletions
- Find common letters 
- Find unique letters to each string
- For common letters, subtract their frequencies and add this to the number of deletions
- For unique letters, add their frequencies to the number of deletions

*/

const str1 = 'abc';
const str2 = 'amnop';
// 6

const str3 = 'cde';
const str4 = 'abc';
// 4

const str5 = 'absdjkvuahdakejfnfauhdsaavasdlkj';
const str6 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';
// 19

function makingAnagrams(str1, str2) {
	let firstMap = new Map();
	let secondMap = new Map();

	for (let i = 0; i < str1.length; i++) {
		if (!firstMap.has(str1[i])) {
			firstMap.set(str1[i], 1);
		} else {
			firstMap.set(str1[i], firstMap.get(str1[i]) + 1);
		}
	}

	for (let i = 0; i < str2.length; i++) {
		if (!secondMap.has(str2[i])) {
			secondMap.set(str2[i], 1);
		} else {
			secondMap.set(str2[i], secondMap.get(str2[i]) + 1);
		}
	}

	let sharedLetters = [];
	let firstUnique = [];
	let secondUnique = [];
	const firstLetters = [...firstMap.keys()];
	const secondLetters = [...secondMap.keys()];

	firstLetters.forEach(function (letter) {
		if (secondLetters.includes(letter)) {
			sharedLetters.push(letter);
		} else {
			firstUnique.push(letter);
		}
	});

	secondLetters.forEach(function (letter) {
		if (firstLetters.includes(letter)) {
			sharedLetters.push(letter);
		} else {
			secondUnique.push(letter);
		}
	});

	sharedLetters = [...new Set(sharedLetters)];
	let deletions = 0;

	firstUnique.forEach((letter) => (deletions += firstMap.get(letter)));
	secondUnique.forEach((letter) => (deletions += secondMap.get(letter)));

	for (let i = 0; i < sharedLetters.length; i++) {
		deletions += Math.abs(
			firstMap.get(sharedLetters[i]) - secondMap.get(sharedLetters[i])
		);
	}

	return deletions;
}

console.log(makingAnagrams(str1, str2));
console.log(makingAnagrams(str3, str4));
console.log(makingAnagrams(str5, str6));
