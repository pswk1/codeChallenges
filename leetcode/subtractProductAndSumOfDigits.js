/* 
https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

const test1 = 234;
// 15
const test2 = 4421;
// 21

const subtractProductAndSum = (n) => {
	if (n.length === 1) {
		return n;
	}

	let arr = n
		.toString()
		.split('')
		.map((number) => parseInt(number));
	let product = arr.reduce((prev, current) => prev * current);
	let sum = arr.reduce((prev, current) => prev + current);

	return product - sum;
};

console.log({
    test1: subtractProductAndSum(test1),
    test2: subtractProductAndSum(test2),
})