/* 
When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. 
In this PDF viewer, each word is highlighted independently.

There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' is at index 25. 
There will also be a string. 
Using the letter heights given, determine the area of the rectangle highlight in mm² assuming all letters are 1mm wide.

Sample Input

1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
abc

Sample Output
9

Letter heights are a = 1, b = 3, c = 1, The tallest letter, b is 3mm high.
The selection area for this word is 3 * 1mm * 3mm = 9mm²
*/

/* 
We can use ascii codes to find the indicies of the letters, leading to their respective heights in the heights array.
Find the largest height, and multiply by the length of the word.
*/

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
const word = 'zaba';
// 28

function designerPdfViewer(h, word) {
    let letterHeights = [];
    let letterIndex;

    for (let i=0; i<word.length; i++) {
        letterIndex = word.charCodeAt(i) - 97;
        letterHeights.push(h[letterIndex]);
    }
    const rectangleHeight = Math.max(...letterHeights);
    const rectangleWidth = word.length;
    const areaOfRectangleHighlight = rectangleHeight * rectangleWidth

    return areaOfRectangleHighlight;
}

console.log(designerPdfViewer(h, word));