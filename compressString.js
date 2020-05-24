function compressString(s, k) {
  let counter = 0
  let compressed = ""

  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    const next = i === s.length - 1 ? null : s[i + 1]

    if (current === next) {
      counter += 1
    } else {
      const currentLetterIndex = compressed.indexOf(current) !== -1
      if (currentLetterIndex) {
        const sectionBetweenDuplicatedLetter = compressed.substr(currentLetterIndex + 1, compressed.length - 1)
        if (sectionBetweenDuplicatedLetter.length === k) {
          compressed = compressed.substr(0, currentLetterIndex - 1)
          counter += 1
          compressed += `${counter}${current}`
          counter = 0
          continue
        }
      }

      counter += 1
      compressed += `${counter === 1 ? '' : counter}${current}`
      counter = 0
    }
  }

  return  compressed
}

console.log(compressString("AAAABBCAAAAADDD", 3))  // => 5A3D
