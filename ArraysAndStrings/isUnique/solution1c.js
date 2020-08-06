//Implement am algorithm to determine if a string has all unique characters
// if allowed using data structure
// Time complexity Big O(N)
// Space complexity Big O(N) - the hashmap will hold numbers of character available from the string
function isUnique (string) {
  let letters = {}
  for (let i = 0; i < string.length; i++) {
    if (letters[string[i]]) {
      return false
    } else {
      letters[string[i]] = 1
    }
  }
  return true
}
isUnique('hello') // false
isUnique('abcde') // true
