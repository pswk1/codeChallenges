/* 
You have been asked to help study the population of birds migrating across the continent. 
Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, 
its id number will be added to your array of sightings. 
You would like to be able to find out which type of bird is most common given a list of sightings. 
Your task is to print the type number of that bird and if two or more types of birds are equally common, 
choose the type with the smallest ID number.

Example:

Input:
const arr = [1, 1, 2, 2, 3]

Type 1 and 2 are most commonly seen, pick the smaller of the two.

Output:
1

Create a Map of each type and their occurrences, (since we are dealing as non-strings for the keys, we will use Map)
Find the highest occurrence,
If multiple types with the highest occurrence,
find the smallest type number.
*/

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// 3

function migratoryBirds(arr) {
    let birdMap = new Map();
    let birdType;

    for (let i=0; i<arr.length; i++) {
        birdType = arr[i];
        if (birdMap.has(birdType)) {
            birdMap.set(birdType, (birdMap.get(birdType)+1));
        } else {
            birdMap.set(birdType, 1)
        }
    }

    const highestOccurrence = Math.max(...birdMap.values());
    const mostCommonBirds = [...birdMap.entries()].filter(bird => bird[1] === highestOccurrence)

    if (mostCommonBirds.length === 1) {
        return mostCommonBirds[0][0]
    } else {
        let tiebreaker = [];
        mostCommonBirds.forEach(bird => tiebreaker.push(bird[0]));
        return Math.min(...tiebreaker);
    }
}

console.log(migratoryBirds(arr));