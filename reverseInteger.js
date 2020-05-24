function reverseInteger(x) {
    const sign = x >= 0 ? '' : '-';
    let n = parseInt(`${Math.abs(x)}`.split('').reverse().join('') , 10)
    n = sign === '-' ? n * -1 : n

    const maxValue = Math.pow(2, 31)

    if (n > maxValue || n < maxValue * -1) return 0

    return n
}

console.log(reverseInteger(-123))
console.log(reverseInteger(123))
