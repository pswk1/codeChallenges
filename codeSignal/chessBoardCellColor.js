/* 
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.

*/


let cell1 = 'A1';
let cell2 = 'C3';
// true


function chessBoardCellColor(cell1, cell2) {
    const cell1Letter = cell1.charCodeAt(0);
    const cell1Num = cell1[1];
    const cell2Letter = cell2.charCodeAt(0);
    const cell2Num = cell2[1];
    
    return ((cell2Num - cell1Num) % 2 === 0 && 
            (cell2Letter - cell1Letter) % 2 === 0) ||
            ((cell2Num - cell1Num) % 2 !== 0 && 
            (cell2Letter - cell1Letter) % 2 !== 0)
}

/* 

if the differences between both coordinates are both odd or both even then they are the same color.
We can use character codes for the letters or create a map for it
in this case it may not warrant a map, so we will use character codes

*/

console.log(chessBoardCellColor(cell1, cell2));
