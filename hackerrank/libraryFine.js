/* 
https://www.hackerrank.com/challenges/library-fine/problem

Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

If the book is returned on or before the expected return date, no fine will be charged 
If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, 
fine = 15 X number of days late.
If the book is returned after the expected return month but still within the same calendar year as the expected return date, the
fine  =  500 + number of months late.
If the book is returned after the calendar year in which it was expected, there is a fixed fine  1000

*/

const d1 = 9;
const m1 = 6;
const y1 = 2015;

const d2 = 6;
const m2 = 6;
const y2 = 2015;
// 45

function libraryFine(d1, m1, y1, d2, m2, y2) {
	if (y1 > y2) {
		return 10000;
	}
	if (m1 > m2 && y1 >= y2) {
		return (m1 - m2) * 500;
	}
	if (d1 > d2 && m1 >= m2 && y1 >= y2) {
		return (d1 - d2) * 15;
	} else return 0;
}

console.log(libraryFine(d1, m1, y1, d2, m2, y2));
