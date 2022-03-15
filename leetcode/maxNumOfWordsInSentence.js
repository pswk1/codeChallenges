/*
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

Runtime: 67 ms, faster than 89.13% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
Memory Usage: 44.6 MB, less than 23.01% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
*/

const test1 = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
// 6
const test2 = ["please wait", "continue to fight", "continue to win"];
// 3

const mostWordsFound = sentences => {
    let max = 0;
    for (const sentence of sentences) {
        let arr = sentence.split(' ');
        if (arr.length > max) {
            max = arr.length;
        }
    }
        
    return max;
}

console.log({
    test1: mostWordsFound(test1),
    test2: mostWordsFound(test2)
})