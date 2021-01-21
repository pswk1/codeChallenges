/*
https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta/solutions
*/

const min1 = 3;
const min2_10 = 1;
const min11 = 2;
const s = 20;
// 14

function phoneCall(min1, min2_10, min11, s) {
	let minutes = 0;

	let rate = min1;

	while (s > 0) {
		minutes++;
		if (minutes === 2) {
			rate = min2_10;
		} else if (minutes > 10) {
			rate = min11;
		}
		s -= rate;
		if (s < 0) {
			minutes--;
		}
	}
	return minutes;
}

console.log(phoneCall(min1, min2_10, min11, s));