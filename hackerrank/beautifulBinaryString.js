/* 
https://www.hackerrank.com/challenges/beautiful-binary-string/problem?h_r=next-challenge&h_v=zen

Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring '010'.

In one step, Alice can change a 0 to a 1 or vice versa.
Count and print the minimum number of steps needed to make Alice see the string as beautiful.
For example, if Alice's string is b = 010 she can change any one element and have a beautiful string.

initialize a changes variable at 0
if the current substring is 010, increment the changes variable,
repeat the process for each group

*/

const str1 = '010';
// 1

const str2 = '01100';
// 0

const str3 = '0101010';
// 2

function beautifulBinaryString(str) {
	let changes = 0;

	for (let i = 0; i < str.length; i++) {
		let first = str[i];
		let second = str[i + 1];
		let third = str[i + 2];

		if (
			i <= str.length - 3 &&
			first === '0' &&
			second === '1' &&
			third === '0'
		) {
			i += 2;
			changes++;
		}
	}
	return changes;
}

console.log(beautifulBinaryString(str1));
console.log(beautifulBinaryString(str2));
console.log(beautifulBinaryString(str3));
