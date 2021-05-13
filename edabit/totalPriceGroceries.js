/* 
https://edabit.com/challenge/jRSST87NjECBzbwzL
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
A grocery object has a product, a quantity and a price, for example:
*/

const test1 = [
	{ product: 'Milk', quantity: 1, price: 1.5 },
	{ product: 'Cereals', quantity: 1, price: 2.5 },
];
// 4

const test2 = [
	{ product: 'Milk', quantity: 1, price: 1.5 },
	{ product: 'Eggs', quantity: 12, price: 0.1 },
	{ product: 'Bread', quantity: 2, price: 1.6 },
	{ product: 'Cheese', quantity: 1, price: 4.5 },
];
// 10.4

const test3 = [
	{ product: 'Chocolate', quantity: 1, price: 0.1 },
	{ product: 'Lollipop', quantity: 1, price: 0.2 },
];

// 0.3

function getTotalPrice(groceries) {
	let total = 0;

	for (const { quantity, price } of groceries) {
		total += quantity * price;
	}

	return Number(total.toFixed(1));
}

console.log({
    test1: getTotalPrice(test1),
    test2: getTotalPrice(test2),
    test3: getTotalPrice(test3),
})