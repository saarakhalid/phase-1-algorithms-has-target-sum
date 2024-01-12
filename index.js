function hasTargetSum(array, target) {
  // Write your algorithm here
  const visitedNumbers = new Set();

  for (const num of array) {
    const difference = target - num;

    if (visitedNumbers.has(difference)) {
      return true; // Pair found
    }

    visitedNumbers.add(num);
  }

  return false; // No pair found
}


/* 
  Write the Big O time complexity of your function here
  The time complexity of this solution is O(n), where n is the length of the input array. This is because you iterate through the array once, and the Set operations (add and has) have constant time complexity.
*/

/*
  Add your pseudocode here
  Function hasTargetSum:
  1. Create an empty set callled visited numbers.
  2. Iterate through each number in the array.
  3. Calculate the difference between the target and the current number.
  4. Check if the difference exists in the set of visited numbers.
  5. If yes, return true (pair found).
  6. If not, add the current number to the set of visited numbers.
  7. If the loop completes, return false (no pair found).

*/

/*
  Add written explanation of your solution here
  The function efficiently uses a set to keep track of visited numbers during the iteration, avoiding the need for nested loops or unnecessary array manipulations.
The loop terminates early if a pair is found, improving the function's efficiency.
The time complexity of the function is O(n) due to a single loop, where n is the length of the input array.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
