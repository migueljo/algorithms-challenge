function anagram(s, t) {
    const one = s.split("").sort().join("")
    const two = t.split("").sort().join("")

    return one === two
}

console.log(anagram("anagram", "nagaram"))
console.log(anagram("rat", "car"))
console.log(anagram("aacc", "ccac"))
