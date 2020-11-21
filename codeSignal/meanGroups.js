const a = [
	[4, 5, 6],
	[1, 2, 3],
	[3, 2, 1],
	[2, 3, 4],
	[3, 4, 2],
];

// 5, 2, 2, 3, 3
// [[4], [0,1], [2,3]]

function meanGroup(a) {
	let meanMap = new Map();
	let currentMean;

	for (let i = 0; i < a.length; i++) {
		currentMean = a[i].reduce((prev, total) => prev + total) / a[i].length;

		if (!meanMap.has(currentMean)) {
			meanMap.set(currentMean, [i]);
		} else {
			meanMap.get(currentMean).push(i);
		}
	}

	const commonMeanGroups = [...meanMap.values()];
	return commonMeanGroups;
}

// function calculateMean(a) {
// 	return a.reduce((prev, total) => prev + total) / a.length;
// }

console.log(meanGroup(a));
