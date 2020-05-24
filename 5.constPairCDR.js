// Daily Coding Problem: Problem #5 [Medium]

function cons(a, b) {
    return [a, b]
}

function car(pair) {
    return pair[0]
}

function cdr(pair) {
    return pair[1]
}

console.log(car(cons(3, 4)))
console.log(cdr(cons(3, 4)))
