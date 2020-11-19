/* 
Lily likes to play games with integers. 
She has created a new game where she determines the difference between a number and its reverse.
For instance, given the number 12, its reverse is 21. Their difference is 9. 
The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j]  and a number k, 

determine the number of days in the range that are beautiful. 
Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k. 
If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

Input:

Three positive integers >= 1:
 i, j, k where i and j are the start and end of the range of days, and k is the number used to check for a beautiful day.

Output: one integer that represents the number of beautiful days.
*/

const start = 20;
const end = 23;
const k = 6;

function beautifulDays(start, end, k) {
    let numBeautifulDays = 0;

    for (let i = start; i <= end; i++) {
        if(isBeautifulDay(i, k)) numBeautifulDays++;
    }
    return numBeautifulDays;
}

function isBeautifulDay(day, k) {
    const reversed = parseFloat(`${day}`.split('').reverse().join(''));
    return (Math.abs(day - reversed) / k) % 1 === 0 
}

console.log(beautifulDays(start, end, k));