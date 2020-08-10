//Given two strings. Return true if they are permutations of one another
//permutation is when strings have the same letters

// Time complexity O(N*log(N))
// For Space complexity the arrays after split will get as big as
// the number of unique characters in the strings which
// could be be O(N) in the worst case, however, if the
// possible character is restricted to only lowercase
// english letters (26) then map can only get as large as
// 26 so it is O(1)

function isPerm(str1, str2) {
  if (str1.length != str2.length) return false

  str1 = str1.split("").sort().join("")
  str2 = str2.split("").sort().join("")

  let p1 = 0, p2 = 0
  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      p1++
      p2++
    } else {
      return false
    }
  }
  return true
}

console.log(isPerm('', ''))  // true
console.log(isPerm('abc', 'cba'))  // true
console.log(isPerm('abcc', 'cbaa'))  // false
