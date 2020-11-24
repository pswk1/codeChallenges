/* 
https://www.hackerrank.com/challenges/strange-advertising/problem

- 5 people are shown the ad. half of those people will like it. Math.floor(5/2) = 2
- each person shows it to 3 people each.
- half of those people will like it.
- on the second day, 2 + 3 = 5 people will like it.
- on the third day, those 3 people will show it to 3 people each.
- 9 more people will see it, half of them will like it. Math.floor(9/2) = 4
- on the third day, 2 + 3 + 4 = 9 people will like it.



loop from 1 to n
initiliaze a variable

first day: 2
second day: 2 + ((2 * 3) /  2) = 5
third day: 5 + ((3 * 3) / 2) = 9
*/

const n = 50;
// 9

function viralAdvertising(n) {
	let shared = 5;
	let like = 0;
	let totalLikes = 0;

	for (let i = 1; i <= n; i++) {
		like = Math.floor(shared / 2);
		shared = like * 3;
		totalLikes += like;
	}
	return totalLikes;
}

console.log(viralAdvertising(n));
