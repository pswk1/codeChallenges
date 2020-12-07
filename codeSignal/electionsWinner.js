/* 
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, \
and an integer k equal to the number of voters who haven't cast their vote yet, 
find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. 
If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

For votes = [2, 3, 5, 2] and k = 3, the output should be
electionsWinners(votes, k) = 2.
*/

/* 
A winner is defined by being strictly more than all the other candidates

Loop through each candidate
if the candidate plus k is greater than the leading candidate, then it is possible to win
return that variable
*/

const votes = [2, 3, 5, 2];
const k = 3;
//2

// const votes = [5, 1, 3, 4, 1];
// const k = 0;
// 1

// const votes = [1, 1, 3, 3, 1];
// const k = 0;
// 0

function electionsWinners(votes, k) {
	let leader = Math.max(...votes);

	if (k === 0) {
		// shorter code but less readable
		// return votes.filter((candidate) => candidate === leader).length > 1 ? 0 : 1

		// longer code but cleaner code
		let leaders = votes.filter((candidate) => candidate === leader);
		if (leaders.length > 1) {
			return 0;
		} else {
			return 1;
		}
	}

	let possibleCandidates = 0;

	for (let i = 0; i < votes.length; i++) {
		let current = votes[i];
		if (current + k > leader) {
			possibleCandidates++;
		}
	}
	return possibleCandidates;
}

console.log(electionsWinners(votes, k));
