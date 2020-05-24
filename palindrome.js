function palindrome(s) {
    s = s.replace(/\W/g, '').toLowerCase()
    const sBackwards = s.split("").reverse().join("")

    return s === sBackwards
}

console.log(palindrome("A man, a plan, a canal: Panama"))
console.log(palindrome("race a car"))
