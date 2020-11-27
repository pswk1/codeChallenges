/* 

Let's define digit degree of some positive integer as the number of times we need to replace this number 
with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.
Example

For n = 5, the output should be
digitDegree(n) = 0;

For n = 100, the output should be
digitDegree(n) = 1.
1 + 0 + 0 = 1.

For n = 91, the output should be
digitDegree(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.

input: integer

Guaranteed constraints:
5 ≤ n ≤ 10^9

output: integer


1. If n is a single digit, return 0. 
otherwise,

2. initialize replacementCount variable at 0
3. get an array of the number's digits & get its sum
4. increment replacementCount
5. repeat the process with the sum of the number's digits until there is only one digit left
6. return the number of replacements
*/

const num1 = 5;
// 0
const num2 = 100;
// 1
const num3 = 91;
// 2

function digitDegree(n) {
	let replacementCount = 0;

	function getDegree(num) {
        if (num < 10) return replacementCount;
        
		const numArr = num.toString().split('').map(Number);
        const sumOfDigits = numArr.reduce((total, current) => total + current);
        
        replacementCount++;
        getDegree(sumOfDigits);
    }
    getDegree(n);
    return replacementCount;
}

console.log(digitDegree(num1));
console.log(digitDegree(num2));
console.log(digitDegree(num3));
