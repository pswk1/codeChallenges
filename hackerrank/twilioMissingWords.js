/* 
https://drive.google.com/drive/folders/1esXnA1GLo-yq4kfjLq3UtGaKTvNfYi0I

Given two strings, one is a subsequence if all of the elements of the
first string occur in the same order within the second string. They do
not have to be contiguous in the second string, but order must be
maintained. 

For example, given the string 'I like cheese', the words ('I',
'cheese') are one possible subsequence of that string. Words are space
delimited.

Given two strings, s and t, where t is a subsequence of s, report the
words of s, missing in t (case sensitive), in the order they are missing.

Example

s = 'I like cheese'
t = 'like'

Then 'like' is the subsequence, and ['I', 'cheese'] is the list of missing
words, in order.

Function Description

Complete the function missingWords in the editor below.

missingWords has the following parameter(s):

string s: a sentence of space-separated words
string t: a sentence of space-separated words

Returns:

string[i]: an array of strings that contains all words in s that are
missing from t, in the order they occur within s

Constraints
Strings s and t consist of English alphabetic letters (i.e., a−z and
A−Z), dash '-', and spaces only.
All words are delimited by a space
1 ≤ |t| ≤ |s| ≤ 10
1 ≤ length of any word in s or t ≤ 15
It is guaranteed that string t is a subsequence
*/

/*
PSEUDOCODE

Given two strings, s and t, where t is a subsequence of s, report the
words of s, missing in t (case sensitive), in the order they are missing.

input: two strings
output: array of strings

Implementation:

we can utilize Javascript Map because it hjolds key-value pairs adn remembers the original insertion order of the keys
loop through the first sentence and store each word as a value, and do the same for the second one

we can then use them as arrays and filter the ones from the first string that are unused in the second one
we may be able to accomplish this without arrays/filtering
*/

const s1 = 'I like cheese';
const t1 = 'like';
// ['I', 'cheese']

const s2 = 'I am using Hacker-Rank to improve programming';
const t2 = 'am Hacker-Rank to improve';
// ['I', 'using', 'programming']

function missingWords(s, t) {

    // create an array of space separated words of both the string text and the pattern
	const arr1 = s.split(' ');
	const arr2 = t.split(' ');

    // utilize a Javascript Map to store the words from the previously created array of the string text, 
    // in order to preserve the insertion order
	let map1 = new Map();

	for (const word of arr1) {
		map1.set(word);
	}

    // access those words with the keys method, since Map is a key-value pair object
	const sWordsInOriginalOrder = [...map1.keys()];

    // filter the words in original order by those that are not included in the string pattern
	return sWordsInOriginalOrder.filter((word) => !arr2.includes(word));
}

console.log(missingWords(s1, t1));
console.log(missingWords(s2, t2));
