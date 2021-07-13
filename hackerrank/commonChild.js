/* 
https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings&h_r=next-challenge&h_v=zen

A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. 
Letters cannot be rearranged. Given two strings of equal length, 
what's the longest string that can be constructed such that it is a child of both?

SHINCHAN
s h i n c a
NOHARAAA

n o h a r
//NHA
3

ABCDEF
FBDAMN

*/

const s1 = 'SHINCHAN';
const s2 = 'NOHARAAA';
// 3

const s3 = 'ABCDEF';
const s4 = 'FBDAMN';
// 2

function commonChild(s1, s2) {
    let m = s1.length;
    let n = s2.length;
    let array = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                array[i][j] = 0;
            } else if (s1[i - 1] === s2[j - 1]) {
                array[i][j] = array[i - 1][j - 1] + 1;
            } else {
                array[i][j] = Math.max(array[i - 1][j], array[i][j - 1])
            }
        }
    }
    return array[m][n];
}

console.log(commonChild(s1, s2));
console.log(commonChild(s3, s4));
