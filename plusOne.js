/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carrying = false
    for (let i = digits.length - 1; i >= 0; i--) {
        const current = digits[i]

        if (current === 9) {
            carrying = true
            digits.splice(i, 1, 0)
            if (i === 0) {
                digits.unshift(1)
            }
        } else if (carrying) {
            digits.splice(i, 1, current + 1)
            break
        } else {
            digits.splice(i, 1, current + 1)
            break
        }
    }

    return digits
};

function plusOne2(digits) {
    const n = BigInt(digits.join(""), 10) + BigInt(1)
    return `${n}`.split("")
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOne([1, 1, 9, 9, 9]))
console.log(plusOne([9]))
console.log(plusOne([9, 9]))
