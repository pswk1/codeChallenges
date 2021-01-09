/* 
https://www.hackerrank.com/challenges/marcs-cakewalk/problem

Marc loves cupcakes, but he also likes to stay fit. 
Each cupcake has a calorie count, and Marc can walk a distance to expend those calories. 
If Marc has eaten j cupcakes so far, after eating a cupcake with c calories he must walk at least 2^j * c miles
to maintain his weight.

Given the individual calorie counts for each of the cupcakes,
determine the minimum number of miles Marc must walk to maintain his weight. Note that he can eat the cupcakes in any order.

2^j * c
where c = number of calories and j = number of miles walked so far, starting at 0

- sort the array from largest to smallest because we want the smallest calculation possible.
- by starting with the largest calories first, it will result in the smallest calculation
- get the sum of the calculations and return it
*/

const cal1 = [1, 3, 2];
// 11

const cal2 = [7, 4, 9, 6];
// 79

const cal3 = [5, 10, 7];
// 44

function marcsCakewalk(calorie) {
	const sorted = calorie.sort((a, b) => b - a);
	let miles = 0;

	for (let i = 0; i < sorted.length; i++) {
		let calories = sorted[i];
		miles += Math.pow(2, i) * calories;
	}
	return miles;
}

console.log(marcsCakewalk(cal1));
console.log(marcsCakewalk(cal2));
console.log(marcsCakewalk(cal3));
