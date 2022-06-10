function findSum(arr = [], value) {
  if (arr.length === 0) return false
  
  const set = new Set();
  
  for (e of arr) {
    const substraction = value - e;
  	if (set.has(substraction)) return [substraction, e]
    set.add(e)
  }
  return false
}

console.log(findSum([2, 3, 5, 8, 1], 10))
