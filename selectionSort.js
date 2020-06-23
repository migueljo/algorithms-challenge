function findSmallest(arr) {
    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }

    return smallestIndex
}

function selectionSort(arr) {
    const newArray = []

    while (arr.length) {
        const smallest = findSmallest(arr)
        newArray.push(arr[smallest])
        arr.splice(smallest, 1)
    }

    return newArray
}

console.log(selectionSort([99, 88, 77, 66, 55, 44, 33, 22, 11, 0]))
