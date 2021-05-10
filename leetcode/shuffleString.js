/* 
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

*/

const s = 'codeleet';
const indices = [4,5,6,7,0,2,1,3];
// expected output: "leetcode"

function restoreString(s, indices) {
	let arr = new Array(indices.length);
	for (let i = 0; i < s.length; i++) {
		arr[indices[i]] = s[i];
	}
	return arr.join('');
};

console.log(restoreString(s, indices));