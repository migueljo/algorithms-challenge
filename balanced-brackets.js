function isCharValid(char) {
  const validChars = ['(', ')', '{', '}', '[', ']']
  return validChars.includes(char)
}

function isClosingChar(char) {
  const closingChars = [')', '}',']'];
  return closingChars.includes(char)
}

function bracketsMatch(closingBracket, openingBracketToCheck) {
	  const matches = {
      ')': '(',
      '}': '{',
      ']': '[',
    }
    const openingChar = matches[closingBracket]
    return openingChar === openingBracketToCheck
}

function isBalanced(s = '') {
  const NO = 'NO'
  const YES = 'YES'
  
  if (s.length === 0) return NO
  const openedBrackets = []; // Queue
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!isCharValid(char)) return NO;
    if (i === 0) {
      if (isClosingChar(char)) return NO;

      openedBrackets.push(char)
      continue
    }
    
    if (isClosingChar(char)) {
      const valueInQueue = openedBrackets[openedBrackets.length - 1]
      if (bracketsMatch(char, valueInQueue)) {
        openedBrackets.pop()
        continue
      } else {
        return NO
      }
    }
    
    // Char is an opening bracket, so push it into the queue
		openedBrackets.push(char)
  }
  if (openedBrackets.length > 0) return NO
  
  return YES
}

console.log("First", isBalanced('{[()]}'));
console.log("Second", isBalanced('{[(])}'));
console.log("Third", isBalanced('{{[[(())]]}}'));
console.log("Third", isBalanced('{{[[(())]]}}['));
