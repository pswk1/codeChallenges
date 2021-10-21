/* 
https://www.codewars.com/kata/58cda88814e65627c5000045/train/javascript

split the str num on the decimal
use the function from Part 1 to generate the number before the decimal
  
to generate the zeroes:
- pass in a boolean that determines whether we're generating for the decimal or the whole number
- if decimal, we can write logic that will create the string as 'num/1${zeroes}'
*/

function expandedForm(num) {
	const arr = num.toString().split('.');
	const whole = arr[0];
	const decimal = arr[1];

	return num < 1
		? generateStr(decimal, true)
		: generateStr(whole, false) + ' + ' + generateStr(decimal, true);
}

function generateStr(str, isDecimal) {
	let result = [];

	for (let i = str.length - 1; i >= 0; i--) {
		let numOfZeroesNeeded = isDecimal ? 1 + i : str.length - 1 - i;
		let zeroes = generateZeroes(numOfZeroesNeeded);

		if (str[i] !== '0') {
			if (isDecimal) {
				result.push(str[i] + '/1' + zeroes);
			} else {
				result.push(str[i] + zeroes);
			}
		}
	}
	return result.reverse().join(' + ');
}

function generateZeroes(zeroesNeeded) {
	let result = '';
	for (let i = 1; i <= zeroesNeeded; i++) {
		result += '0';
	}
	return result;
}

console.log(expandedForm(1.24)); // should return '1 + 2/10 + 4/100'
console.log(expandedForm(7.304)); // should return '7 + 3/10 + 4/1000'
console.log(expandedForm(0.04)); // should return '4/100'
console.log(expandedForm(807.304)); // Should return '800 + 7 + 3/10 + 4/1000'