/* 
https://edabit.com/challenge/MNKfYEKghbKjxYbzb
*/

function likeOrDislike(arr) {
	let buttonState = 'Nothing';
	for (const action of arr) {
		buttonState === action ? (buttonState = 'Nothing') : (buttonState = action);
	}
	return buttonState;
}
