/**
 * Write a func that takes non-empty arr of ints and and int with target sum
 * if numbers add up to target sum, put them into an array
 */

// It's been a minute so we'll start with the brute force solution

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === targetSum) return [array[i], array[j]];
      }
    }
  }
  return [];
}

// other solution: O(n^2) time | O(1) space...neater than my solution above
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = 0; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}