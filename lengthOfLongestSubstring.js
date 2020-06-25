/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let tmpString = ""

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (tmpString.includes(char)) {
            const start = tmpString.indexOf(char)
            tmpString = tmpString.substring(start + 1) + char
            max = Math.max(max, tmpString.length)
        } else {
            tmpString += char
            max = Math.max(max, tmpString.length)
        }
    }
    return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("dveadf"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("aabaab!bb"))
