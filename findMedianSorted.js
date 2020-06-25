function findMedianSortedArrays(nums1, nums2) {
    const a = [...nums1, ...nums2]
    a.sort((a, b) => a < b ? -1 : 1)
    const l = a.length
    if (l % 2 === 0) {
        const first = a[l / 2 - 1]
        const second = a[l / 2]
        return (first + second) / 2
    } else {
        return a[Math.floor(l / 2)]
    }
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([0, 0], [0, 0]))
console.log(findMedianSortedArrays([3], [-2, -1]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 1], [1, 2]))
