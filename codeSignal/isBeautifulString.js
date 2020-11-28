function isBeautifulString(inputString) {
	let sorted = inputString.split('').sort();
	let letterMap = new Map();

	for (let i = 0; i < sorted.length; i++) {
		if (!letterMap.has(sorted[i])) {
			letterMap.set(sorted[i], 1);
		} else {
			letterMap.set(sorted[i], letterMap.get(sorted[i]) + 1);
		}
	}

	const frequencies = [...letterMap.values()];
	console.log(frequencies);

	for (let i = 0; i < frequencies.length - 1; i++) {
		if (frequencies[i + 1] > frequencies[i]) {
			return false;
		}
	}
	return true;
}

/* 
array
sort
Map
values should be decreasing or equal
*/
