/* 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

const test1 = [7, 1, 5, 3, 6, 4];
// 5
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
const test2 = [7, 6, 4, 3, 1];
// 0
// In this case, no transactions are done and the max profit = 0.

function maxProfit(prices) {
	let minPrice = Infinity;
	let profit = 0;

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		}
		if (prices[i] - minPrice > profit) {
			profit = prices[i] - minPrice;
		}
	}
	return profit;
}

const tests = {
	test1: { expected: 5, received: maxProfit(test1) },
	test2: { expected: 0, received: maxProfit(test2) },
};

console.table(tests);
