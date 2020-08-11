// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// O(N) time complexity
// O(N) space complexity
function isPalinPerm(str) {
  let leftover = new Set()

  for (let char of str) {
    let c = char.toLowerCase()
    if (leftover.has(c)) {
      leftover.delete(c)
    } else {
      leftover.add(c)
    }
  }

  if (leftover.has(" ")) leftover.delete(" ")

  return leftover.size <= 1
}

console.log(isPalinPerm('Tact Coa'))    // true
console.log(isPalinPerm('Taa ct Coa'))    // false
console.log(isPalinPerm('this is not a pp'))    // false
console.log(isPalinPerm('this is it this is it'))    // true
