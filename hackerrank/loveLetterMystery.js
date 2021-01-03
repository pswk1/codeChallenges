/* 
https://www.hackerrank.com/challenges/the-love-letter-mystery/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

Find the minimum number of operations required to convert a given string into a palindrome.
Each reduction in the value of any letter is counted as a single operation.
We can only reduce the value of a letter by 1, i.e. he can change d to c, 
but he cannot change c to d or d to b.
The letter a may not be reduced any further.

change string to array of ascii codes
Get absolute differences between first and last, going towards the middle
add those differences to number of operations
*/

const str1 = 'abc';
// 2
const str2 = 'abcba';
// 0
const str3 = 'abcd';
// 4
const str4 = 'cba';
// 2

function theLoveLetterMystery(str) {
	let operations = 0;
    const codeArr = str.split('').map((letter) => letter.charCodeAt());
    const midpoint = Math.floor(codeArr.length / 2)

	for (let i = 0; i < midpoint; i++) {
		let current = codeArr[i];
		let last = codeArr.length - 1;

		operations += Math.abs(codeArr[last - i] - current);
	}
	return operations;
}

console.log(theLoveLetterMystery(str1));
console.log(theLoveLetterMystery(str2));
console.log(theLoveLetterMystery(str3));
console.log(theLoveLetterMystery(str4));
