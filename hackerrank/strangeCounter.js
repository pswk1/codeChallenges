/* 
https://www.hackerrank.com/challenges/strange-code/problem

There is a strange counter. At the first second, it displays the number 3. 
Each second, the number displayed by decrements by 1 until it reaches 1.

In next second, teh timer resets to 2 x the intial number for the prior cycle and
continues counting down.

Find and print the value displayed by the counter at time t.


where n = the nth cycle,
the first number of each cycle = (3 * Math.pow(2, n-1)) - 2
the first value will be 3 multiplied by 2, n times.

(3 * Math.pow(2, n-1)) - 2

desired time?
15

at 3 cycles the time will be at 10.
at 4 cycles, the time will be at 22.

15 is in between 10 and 22, or between cycles 3 and 4.
==================================================================

FIND VALUE:
We know that we need to go at least 3 cycles.
initialValue = 3

for (i = 1, i<=n; i++) {
    initialValue *= 2;
}

at 3 cycles, time will be 10 and value will be 12.
our desired time is 15. 15 - 10 = 5 second difference.
12 - 5 = 7

value at time 15 will be 7.
*/

const t = 14;

function strangeCounter(t) {
	if (t === 1) {
		return 3;
	} else if (t === 4) {
		return 6;
	} else {
		let timeArr = [1];
		let cycles = 2;

		while (timeArr[timeArr.length - 1] < t) {
			timeArr.push(3 * Math.pow(2, cycles - 1) - 2);
			cycles++;
		}
		let cycleStart = timeArr[timeArr.length - 2];
		let valueIterate = timeArr.indexOf(cycleStart);
		let currentValue = 3;

		for (let i = 1; i <= valueIterate; i++) {
			currentValue *= 2;
		}
		return currentValue - (t - cycleStart);
	}
}

console.log(strangeCounter(t));
