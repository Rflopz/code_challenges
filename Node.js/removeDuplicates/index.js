/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  nums.splice(0, nums.length, ...new Set(nums));
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // nums.splice(0, 1, [...nums]);

  let found = nums.indexOf(val);

  while (found != -1) {
    nums.splice(found, 1);
    found = nums.indexOf(val);
  }
};

let n = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(n, 2));

console.log(n);
