/*
https://www.hackerrank.com/challenges/cavity-map/problem 

You are given a square map as a matrix of integer strings. 
Each cell of the map has a value denoting its depth. 
We will call a cell of the map a cavity if and only if this cell is not on the border of the map 
and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side, or edge.

Find all the cavities on the map and replace their depths with the uppercase character X.

- Split each string into an array
- check each element of each array element for:
    - non-edge element && deepest among adjacent elements
- after checks are complete, join each element again
- likely O^2 runtime

// eliminate first row, last row, and the first and last elements of each row
*/

const grid = ['1112', '1912', '1892', '1234'];
// '1112', '1X12', '18X2', '1234'

function cavityMap(grid) {
	let arr = grid.map((str) => str.split(''));
	for (let i = 1; i < arr.length - 1; i++) {
		for (let j = 1; j < arr[i].length - 1; j++) {
			if (
				arr[i - 1][j] !== undefined &&
				arr[i][j + 1] !== undefined &&
				arr[i][j - 1] !== undefined &&
				arr[i + 1][j] !== undefined &&
				arr[i][j] > arr[i - 1][j] &&
				arr[i][j] > arr[i][j + 1] &&
				arr[i][j] > arr[i][j - 1] &&
				arr[i][j] > arr[i + 1][j]
			) {
				arr[i].splice(j, 1, 'X');
			}
		}
	}
	return arr.map((row) => row.join(''));
}

console.log(cavityMap(grid));
