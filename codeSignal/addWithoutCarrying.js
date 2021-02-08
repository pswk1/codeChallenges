// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S/solutions

function additionWithoutCarrying(param1, param2) {
	let result = '';

	let arrOne = param1.toString().split('').map(Number);
	let arrTwo = param2.toString().split('').map(Number);

	if (arrOne.length < arrTwo.length) {
		while (arrOne.length < arrTwo.length) {
			arrOne.unshift(0);
		}
	} else if (arrTwo.length < arrOne.length) {
		while (arrTwo.length < arrOne.length) {
			arrTwo.unshift(0);
		}
	}

	for (let i = 0; i < arrOne.length; i++) {
		let addition = arrOne[i] + arrTwo[i];
		if (addition > 9) {
			result += (addition % 10).toString();
		} else {
			result += addition.toString();
		}
	}
	return Number(result);
}
