/*
https://www.hackerrank.com/challenges/mark-and-toys/problem

Mark and Jane are very happy after having their first child. Their son loves toys, 
so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. 
Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.
Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

sort the prices from least to greatest
iterate through, and keep track of total cost
keep track of how many items are bought while the total cost is within budget
return number of items when budget is met
*/

const prices1 = [1, 2, 3, 4];
const budget1 = 7;
// 3

const prices2 = [1, 12, 5, 111, 200, 1000, 10];
const budget2 = 50;
// 4

function maximumToys(prices, budget) {
	let itemsBought = 0;
	let totalCost = 0;
	const sorted = prices.sort((a, b) => a - b);

	for (const price of sorted) {
		if (totalCost < budget) {
			totalCost += price;
			itemsBought++;
		} else {
			break;
		}
	}
	return itemsBought - 1;
}

const test1 = maximumToys(prices1, budget1);
const test2 = maximumToys(prices2, budget2);

console.log({ test1, test2 });
