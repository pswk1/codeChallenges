/* 
https://www.hackerrank.com/challenges/anagram/problem

In this challenge, you will be given a string. You must split it into two contiguous substrings, 
then determine the minimum number of characters to change to make the two substrings into anagrams of one another,
or -1 if not possible

if the length is odd, return -1
initialize changes variable at 0
split the string into two
sort substrings
loop through, if same-indexed letters are different, increment changes
*/

const str1 = 'xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj';
// 13
const str2 = 'ab';
// 1
const str3 = 'abc';
// -1
const str4 = 'mnop';
// 2
const str5 = 'xyyx';
// 0
const str6 = 'xaxb bbxx';
// 1

function anagram(str) {
	if (str.length % 2 !== 0) return -1;

	let first = str.substring(0, str.length / 2);
	let second = str.substring(str.length / 2);
	let changes = 0;

	for (let i = 0; i < first.length; i++) {
		if (second.includes(first[i])) {
			second = second.replace(first[i], '');
		} else {
			changes++;
		}
	}
	return changes;
}

console.log(anagram(str1));
console.log(anagram(str2));
console.log(anagram(str3));
console.log(anagram(str4));
console.log(anagram(str5));
console.log(anagram(str6));
