// use a hashtable
// store value in hashtable

 function twoNumberSum(array, targetSum) {
   const numsHashTable = {};
   for (let num of array) {
     const possibleMatch = targetSum - num;
     if (possibleMatch in numsHashTable) {
       return [possibleMatch, num]
     } else {
       numsHashTable[num] = true;
     }
   }
   return [];
 }