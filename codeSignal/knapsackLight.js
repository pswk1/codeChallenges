/* 
You found two items in a treasure chest! 
The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. 
What is the total maximum value of the items you can take with you, 
assuming that your max weight capacity is maxW and you can't come back for the items later?

Note that there are only two items and you can't bring more than one item of each type,
 i.e. you can't take two first items or two second items.

- store all combos of weights and values
    - weight1 and value1, weight2 and value2, and their combined weights and values
- iterate through all the combinations to find the maximmum value with a weight under the maximum weight
*/

const value1 = 10;
const weight1 = 5;
const value2 = 6;
const weight2 = 4;
const maxWeight = 8;
// 10

function knapsackLight(value1, weight1, value2, weight2, maxWeight) {
	const comboMap = new Map();
	comboMap.set(value1, weight1);
	comboMap.set(value2, weight2);
	comboMap.set(value1 + value2, weight1 + weight2);

	let maxValue = 0;

	for (const [currentValue, currentWeight] of comboMap) {
		if (currentWeight <= maxWeight && currentValue > maxValue) {
			maxValue = currentValue;
		}
	}
	return maxValue;
}

console.log(knapsackLight(value1, weight1, value2, weight2, maxWeight));
