const inputArray = [2, 3, 5, 1, 6];
const k = 2;
// 8

function arrayMaxConsecutiveSum(inputArray, k) {
	// Gets the first consecutive sum quicker than getting first k numbers, enables efficient scaling
	let sum = 0;
	let j = k;

	while (j--) {
		sum += inputArray[j];
	}
	// 5

	let maxsum = sum;
	// 5

	// Calculates each consecutive sum after the first one
	for (let i = 1; i <= inputArray.length - k; i++) {
		sum = sum - inputArray[i - 1] + inputArray[i + k - 1];
		/* 
        i = 1 sum = 5 - 2 + 5 = 8    indicies: 0, 2
        i = 2 sum = 5 - 3 + 1 = 3    indicies: 1, 3
        i = 3 sum = 5 - 5 + 6 = 6    indicies: 2, 4
        */
		if (sum > maxsum) {
			maxsum = sum;
		}
	}
	return maxsum;
}

console.log(arrayMaxConsecutiveSum(inputArray, k));
