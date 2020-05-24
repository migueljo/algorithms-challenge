function rotate90Deg(matrix) {
    const matrixCopy = [...matrix.map(i => [...i])]
    let z = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++, z--) {
        for (let j = 0; j < matrix[i].length; j++) {
            const current = matrixCopy[i][j];
            matrix[j][z] = current
        }
    }
    return matrix
}

const a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(rotate90Deg(a))
