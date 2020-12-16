/* 
https://www.hackerrank.com/challenges/save-the-prisoner/problem

A jail has a number of prisoners and a number of treats to pass out to them. 
Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. 
A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be 
handed to each prisoner sequentially around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others, 
but it tastes awful. 
Determine the chair number occupied by the prisoner who will receive that candy.
*/

const n = 3;
const m = 7;
const s = 3;
// 3

/* 
Explanation:

four prisoners: [1, 2, 3, 4]
6 pieces of candy. start distributing at chair 2.

*/

const saveThePrisoner = (n, m, s) => (m - 1 + s) % n || n;

console.log(saveThePrisoner(n, m, s));
