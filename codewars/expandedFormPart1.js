/* 
https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

initialize a result variable as an array
loop through the number in string form backwards
  
if the number is not a "0", generate the necessary number of proceeding zeroes and push it to result
the number of zeroes needed can be calculated by str.length - 1 -i
  
we can reverse and join the array with a ' + ' delimiter
*/

function expandedForm(num) {
	let result = [];
	let str = num.toString();

	for (let i = str.length - 1; i >= 0; i--) {
		let numOfZeroesNeeded = str.length - 1 - i;
		let zeroes = generateZeroes(numOfZeroesNeeded);

		if (str[i] !== '0') {
			result.push(str[i] + zeroes);
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

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'