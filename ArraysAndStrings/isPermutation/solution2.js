
//function to check given two strings, they are permutations of each other

// TIME: 0(N)
// SPACE: O(N)

function isPermutation (string1, string2) {
  let letters = {}

  if (string1.length !== string2.length) {
    return false
  }

  for (let i = 0; i < string1.length; i++) {
    if (letters[string1[i]]) {
        letters[string1[i]]++
    } else {
      letters[string1[i]] = 1
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (letters[string2[i]]) {
      letters[string2[i]]--
    } else {
      return false
    }
  }

  for (let key in letters) {
    if (letters[key] !== 0) {
      return false
    }
  }

return true
}

isPermutation("abcdef", "fabced") // true
isPermutation("abcdef", "fabcee") // false
isPermutation("hello", "hellooo") // false
