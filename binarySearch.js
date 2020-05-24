function binarySearch(orderedList, item) {
    let low = 0
    let high = orderedList.length

    while (low <= high) {
        const midIndex = Math.floor((low + high) / 2)
        const currentNumber = orderedList[midIndex]

        if (currentNumber === item) return midIndex
        if (item > currentNumber) low = midIndex + 1
        else high = midIndex - 1
    }

    return -1
}

console.log(binarySearch([10, 12, 13, 14, 15, 16, 17, 18, 19], 17))
console.log(binarySearch([10, 12, 13, 14, 15, 16, 17, 18, 19], 0))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))
