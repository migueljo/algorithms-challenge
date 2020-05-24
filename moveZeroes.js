function moveZeroes(nums) {
    let i = 0
    let iterations = 0
    let originalLength = nums.length

    while (iterations < originalLength) {
        const current = nums[i]
        if (current === 0) {
            nums.push(0)
            nums.splice(i, 1)
        } else {
            i++
        }

        iterations++
    }

    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))
console.log(moveZeroes([0,1,0,3,12]))
