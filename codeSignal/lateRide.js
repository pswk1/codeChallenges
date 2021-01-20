/* 
https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L/solutions

One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.
When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.
Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
*/

const n1 = 240;
// 4

const n2 = 808;
// 14

function lateRide(n) {
	if (n % 60 === 0 && n / 60 < 10) {
		return n / 60;
	} else if (n % 60 === 0 && n / 60 >= 10) {
		let arr = (n / 60).toString().split('');
		return Number(arr[0]) + Number(arr[1]);
	} else {
		let hour = Math.floor(n / 60);
		let hourArr = hour.toString().split('');
		let min = n - hour * 60;
		let minArr = min.toString().split('');

		let digits = [...hourArr, ...minArr].map(Number);
		return digits.reduce((a, b) => a + b);
	}
}

const test1 = lateRide(n1);
const test2 = lateRide(n2);

console.log({test1, test2});