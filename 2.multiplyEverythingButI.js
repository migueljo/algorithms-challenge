// Daily Coding Problem: Problem #2 [Hard]

function x(a) {
    const newArray = []
    for (let i = 0; i < a.length; i++) {
        let r = 1

        for (let j = 0; j < a.length; j++) {
            if (i === j) continue

            r *= a[j]
        }

        newArray.push(r)
    }

    return newArray
}

console.log(x([1, 2, 3, 4, 5]))
console.log(x([3, 2, 1]))
