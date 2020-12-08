/* 
Find acceptable knight moves.
Knights can go vertically 2, horizontally 1, or
                vertically 1, horizontally 2
horizontal must be within a-h // charcode 97 - 104
vertical must be within 1-8 // charcode 49-56

Store an array of all possible moves,
fill an array of all positions after moves have been calculated
filter through array of acceptable positions

*/

/* 
example:
d4 // charcodes: 100 and 52

Possible Moves:
[[2, 1], [2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]
*/

let cell = 'h8';
// 6

function chessKnight(cell) {
	const cellCode = cell.split('').map((char) => char.charCodeAt());
	const directions = [
		[2, 1],
		[2, -1],
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[-2, 1],
		[-2, -1],
	];
	let possibleMoves = [];

	for (let i = 0; i < directions.length; i++) {
		let current = directions[i];
		possibleMoves.push([current[0] + cellCode[0], current[1] + cellCode[1]]);
	}

	const validMoves = possibleMoves.filter(
		(move) => move[0] >= 97 && move[0] <= 104 && move[1] >= 49 && move[1] <= 56
	);
	return validMoves.length;
}

console.log(chessKnight(cell));
