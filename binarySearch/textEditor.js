/* 
Given a string s representing characters typed into an editor, with "<-" representing a backspace, return the current state of the editor.

Constraints
n ≤ 100,000 where n is the length of s
*/

const test1 = 'abc<-z';
// 'abz'
// Explanation: The 'c' got deleted by the backspace.
const test2 = '<-x<-z<-';
// ''
// Explanation:  All characters are deleted. Also note you can type backspace when the editor is empty as well.

const solve = (s) => {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '<' && s[i + 1] === '-') {
			stack.pop();
			i++;
			continue;
		}
		stack.push(s[i]);
	}
	return stack.join('');
};

console.log({
    test1: solve(test1),
    test2: solve(test2)
})