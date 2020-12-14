// have an array of numbers, not necessarily sorted
// first, sort the array. Good sorting algos take O(nlogn) (merge/quick).
// use pointers and sum up numbers at each pointer
// compare sum to the target sum 
// time is O(nlogn) space is O(1)

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
