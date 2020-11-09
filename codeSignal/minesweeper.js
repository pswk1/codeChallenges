
/* 
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]

loop through matrix array,
inner loop through each array,
if there surrounding mines, increment a mine count, push into new array,
push that new array into the matrix array.

*/

const matrix = [[true, false, false],
[false, true, false],
[false, false, false]];

/* 

output: 
[
[1, 2, 1],
[2, 1, 1],
[1, 1, 1]
]

*/

function minesweeper(matrix) {
 let mineCount = [];
    for (let i=0; i<matrix.length; i++) {
        mineCount.push([]);
        for (let j=0; j<matrix[i].length; j++) {
            mineCount[i][j] = 0;

            //above
            if (matrix[i-1] !== undefined && matrix[i-1][j]) mineCount[i][j]++;
            //below
            if (matrix[i+1] !== undefined && matrix[i+1][j]) mineCount[i][j]++;

            //right 
            if (matrix[i][j+1] !== undefined && matrix[i][j+1]) mineCount[i][j]++;

            //left
            if (matrix[i][j-1] !== undefined && matrix[i][j-1]) mineCount[i][j]++;

            // top right diagonal
            if (matrix[i-1] !== undefined && matrix[i-1][j+1]) mineCount[i][j]++;

             // top left diagonal
             if (matrix[i-1] !== undefined && matrix[i-1][j-1]) mineCount[i][j]++;

            // bottom right diagonal
            if (matrix[i+1] !== undefined && matrix[i+1][j+1]) mineCount[i][j]++;

            // bottom left diagonal
            if (matrix[i+1] !== undefined && matrix[i+1][j-1]) mineCount[i][j]++;

        }
    }
    return mineCount;
}

console.log(minesweeper(matrix))