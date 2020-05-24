// Daily Coding Problem: Problem #1 [Easy]

function x(a, k) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] + a[j] === k) return true
        }
    }

    return false
}

console.log(x([1, 2, 3, 4, 5, 6, 103, 22, 62], 124))
