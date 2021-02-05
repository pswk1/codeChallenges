/* 
https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
*/

var arrayStringsAreEqual = function (word1, word2) {
	let checkOne = '';
	let checkTwo = '';

	for (let chunk of word1) {
		checkOne += chunk;
	}

	for (let chunk of word2) {
		checkTwo += chunk;
	}

	if (checkOne.length !== checkTwo.length) return false;

	return checkForSameString(checkOne, checkTwo);
};

function checkForSameString(str1, str2) {
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) {
			return false;
		}
	}
	return true;
}
