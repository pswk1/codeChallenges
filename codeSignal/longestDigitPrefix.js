/* 
Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
longestDigitsPrefix(inputString) = "123".
*/

const testStr1 = '123aa1';
// 123
const testStr2 = '  3) always check for whitespaces';
// ""
const testStr3 = 'aaaaaaa';
// ""

function longestDigitsPrefix(inputString) {
	let digitPrefix = '';
	for (let i = 0; i < inputString.length; i++) {
		if (inputString[i] >= 0 && inputString[i] <= 9 && inputString[i] !== ' ') {
			digitPrefix += inputString[i];
		} else {
			break;
		}
	}

	if (digitPrefix === '') {
		return 'There are no digits as a prefix';
	} else {
		return digitPrefix;
	}
}

console.log(longestDigitsPrefix(testStr1));
console.log(longestDigitsPrefix(testStr2));
console.log(longestDigitsPrefix(testStr3));
