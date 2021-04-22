/*
https://app.codesignal.com/arcade/code-arcade/loop-tunnel/H5PP5MXvYvWXxTytH/solutions
*/

function rounders(n) {
    let arr = n.toString().split('').map(Number);
    
    for (let i = arr.length - 1; i >= 1; i--) {
        
        if (arr[i] !== 0) {
            if (arr[i] < 5) {
                arr[i] = 0;
            }
            if (arr[i] >= 5) {
                arr[i] = 0;
                arr[i-1]++;
            }
        }
    }
    
    const result = Number(arr.join(''))
    return result;
}


/* 
start from the back,
if number is not equal to zero and less than 5,
we turn it to zero

if number is not equal to zero and more than 5,
we turn it to zero and increment the next number

*/
