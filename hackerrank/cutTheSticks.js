/* 
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. 
When all the remaining sticks are the same length, they cannot be shortened so discard them.

https://www.hackerrank.com/challenges/cut-the-sticks/problem

Sample Input 0

5 4 4 2 2 8

Sample Output 0

6
4
2
1

Explanation 0

sticks-length        length-of-cut   sticks-cut
5 4 4 2 2 8             2               6
3 2 2 _ _ 6             2               4
1 _ _ _ _ 4             1               2
_ _ _ _ _ 3             3               1
_ _ _ _ _ _           DONE            DONE


1. Find the shortest stick(s) in the array. 
2. Subtract the length from each stick and remove those shortest stick(s).
3. Keep track of how many sticks are in the array after each iteration.
4. Store the stick counts in an output array.
5. Repeat this process until there is only one stick left.
*/

const arr = [8, 8, 14, 10, 3, 5, 14, 12];

function cutTheSticks(arr) {
	let sticksCount = [];
	while (arr.length != 0) {
		let shortest = Math.min(...arr);
		sticksCount.push(arr.length);

		for (let i = 0; i < arr.length; i++) {
			let shortened = arr[i] - shortest;

			if (shortened === 0) {
				arr.splice(i, 1);
				i -= 1;
			} else {
				arr[i] = shortened;
			}
		}
	}
	return sticksCount;
}

console.log(cutTheSticks(arr));
