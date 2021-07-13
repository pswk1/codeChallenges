/* 
https://www.hackerrank.com/challenges/two-characters/problem?h_r=next-challenge&h_v=zen

Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.

*/

/* 
create a Set to find unique characters
create possible valid strings by removing two at a time

use a helper function to check validity of each test string

*/

const test1 = 'abaacdabd';
// 4

const test2 = 'beabeefeab';
// 5

function alternate(s) {
	let maxlen = 0;
	const combinations = [];
	[...new Set(s)].forEach((v, i, a) => {
		a.slice(i + 1).forEach((v1) => {
			combinations.push([v, v1]);
		});
	});
	combinations.forEach((comb) => {
		let t = [...s].filter((v) => comb.includes(v)).join('');
		if (t.match(/(.)\1/) === null) {
			maxlen = Math.max(maxlen, t.length);
		}
	});
	return maxlen;
}

// function checkValid (arr) {
//     const validSequence = (a, b, c) => a !== b && a === c;

//     for (let i = 0; i <= arr.length - 3; i++ ) {
//         if (!validSequence(arr[i], arr[i+1], arr[i+2])) {
//             return false;
//         }
//     }
//     return true;
// }

console.log({
	test1: alternate(test1),
	test2: alternate(test2),
});
