/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const arr = nums.map((val,idx) => [val,idx]).sort((a,b) => a[0] - b[0]); 
  
  let left = 0;
  let right= nums.length - 1;

  while(left <= right) {
      let sum = arr[left][0] + arr[right][0];

      if(sum > target) {
          right -= 1;
      } else if(sum < target) {
          left += 1;
      } else{
          return [arr[left][1] , arr[right][1]]
      }
  }
  return arr
};