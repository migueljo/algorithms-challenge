function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isSorted = true;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                const bigger = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = bigger
                isSorted = false
            }
        }
        if (isSorted) return arr
    }
    return arr
}

console.log(bubbleSort([8, 5, 9, 3, 20, 15, 13, 12, 11, 2]))
console.log(bubbleSort([8, 5]))
console.log(bubbleSort([8]))
console.log(bubbleSort([]))
