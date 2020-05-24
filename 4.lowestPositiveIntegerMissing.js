function lowestPositiveIntegerMissing(a) {
    a = a.sort((a, b) => a > b)

    for (let i = 0; i < a.length - 1; i++) {
        const current = a[i]
        const next = a[i + 1]
        if (current < 0) continue

        const gap = next - current
        if (gap > 1) {
            return current + 1
        }
    }

    return a[a.length - 1] + 1
}

console.log(lowestPositiveIntegerMissing([3, 4, -1, 1]))
console.log(lowestPositiveIntegerMissing([1, 2, 0]))
console.log(lowestPositiveIntegerMissing([1, 2, 3, 0]))
console.log(lowestPositiveIntegerMissing([20, 23, 40, 0]))
console.log(lowestPositiveIntegerMissing([20, 23, 40]))
