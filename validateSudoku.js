function getSubmatrices(array, by) {
    const a = [...array]
    let x = []
    let j = 0
    let i = 0
    let z = []

    while (j < a.length * by) {
        const row = a[i]
        x.push(...row.slice(0, by))
        if (x.length === by * by) {
            z.push([...x])
            x = []
        }
        row.splice(0, 3)
        i = i === a.length - 1 ? 0 : i + 1
        j++
    }

    return z
}

function isValidSudoku(board) {
    const columnsHash = {}

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        const rowHash = {}

        for (let j = 0; j < row.length; j++) {
            const current = row[j];
            if (current === '.') continue

            // if the current value is the current row return false
            if (rowHash[current]) return [false, 'row']
            else rowHash[current] = current

            // if the current value is in a column return false
            columnsHash[j] = columnsHash[j] || {}
            if (columnsHash[j][current]) return [false, 'column']
            else columnsHash[j][current] = current
        }
    }

    const submatrices = getSubmatrices(board, 3)

    for (let i = 0; i < submatrices.length; i++) {
        const submatrix = submatrices[i];
        const hash = {}

        for (let j = 0; j < submatrix.length; j++) {
            const current = submatrix[j];
            if (current === '.') continue

            if (hash[current]) return [false, 'submatrix', current]
            else hash[current] = current
        }
    }

    return true
}

const first = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(first))

const second = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(second))

const third = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(third))
