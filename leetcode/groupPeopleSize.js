/*
https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

Return a list of groups such that each person i is in a group of size groupSizes[i].

Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.
*/

const test1 = [3, 3, 3, 3, 3, 1, 3];
// [[5],[0,1,2],[3,4,6]]
const test2 = [2, 1, 3, 3, 3, 2];
// [[1],[0,5],[2,3,4]]

function groupThePeople(groupSizes) {
	const map = new Map();
	let groups = [];

	for (let i = 0; i < groupSizes.length; i++) {
		if (map.has(groupSizes[i])) {
			let bucket = map.get(groupSizes[i]);
			bucket.push(i);
		} else {
			map.set(groupSizes[i], [i]);
		}
	}

	for (let [key, value] of map) {
		for (let i = 0; i <= value.length - key; i += key) {
			groups.push(value.slice(i, i + key));
		}
	}
	return groups;
}

// Initial approach is overthought,
// More efficient:

// function groupThePeople(group) {
// 	const result = [];
// 	const hash = {};

// 	for (let i = 0; i < group.length; i++) {
// 		const num = group[i];

// 		if (hash[num]) {
// 			hash[num].push(i);
// 		} else {
// 			hash[num] = [i];
// 		}

// 		if (hash[num].length === num) {
// 			result.push(hash[num]);
// 			delete hash[num];
// 		}
// 	}

// 	return result;
// }

console.log({
	expected: [[5], [0, 1, 2], [3, 4, 6]],
	received: groupThePeople(test1),
});
console.log({
	expected: [[1], [0, 5], [2, 3, 4]],
	received: groupThePeople(test2),
});
