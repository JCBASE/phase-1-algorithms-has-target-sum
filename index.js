/*Create a function hasTargetSum that adds any pair of numbers in an array 
and return true if any pair of numbers when added equals the target number*/ 

function hasTargetSum(array, target) { 
  // Write your algorithm here              
  // look through each number in the array
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    // look through the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      // compare any pair with the target
      if (firstNum + secondNum === target) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
  create an array from the input array
  if the sum is the same as the target
    return true
  else
    return false

*/

/*
  Add written explanation of your solution here
  Create two arrays, one that iterates over the array and one that
  iterates the remaining numbers in the array. Then add both numbers in each array
  and check to see if it equals the target number. At the end of the array return false.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
