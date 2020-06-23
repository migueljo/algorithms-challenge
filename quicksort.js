function quicksort(arr) {
    if (arr.length < 2) return arr

    let pivot = arr[Math.floor(arr.length / 2)]
    let less = arr.filter(item => item < pivot)
    let greater = arr.filter(item => item > pivot)

    return [...quicksort(less), pivot, ...quicksort(greater)] 
}

console.log(quicksort([15, 90, 80, 70, 60, 50, 40, 0, 20, 10]))
console.log(quicksort([14, 10, 15, 9, 16]))
