/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    let i = 0

    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i -= 1
        }

        i++
    }

    return nums.length
};

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([10, 10, 20]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
