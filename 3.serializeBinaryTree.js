function stringify(bt) {
    return JSON.stringify(bt)
}

function parse(bt) {
    return JSON.parse(bt)
}

const binaryTree = {
    val: 15,
    left: {
        val: 13,
        left: {
            val: 12
        },
        right: {
            val: 15
        }
    },
    right: {
        val: 18,
        left: {
            val: 19
        },
        right: {
            val: 16
        }
    }
}

let a = parse(stringify(binaryTree)).left.left.val == binaryTree.left.left.val
console.log(a)
