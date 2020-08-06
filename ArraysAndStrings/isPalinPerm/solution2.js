//function to check if there is a a palendrome in any permutation of string
//ignore non-alpha char and spaces

let yesP = 'qwertytrewq'
let yesP2 = 'aabb'
let emptyStr = ''
let noP = 'qre'
let space = 'tacca to'
let ignoreNonLet = 'ta#$(3784cotac'
let tooManyRepeats = 'aaac'
let tooManyRepeatsTrue = 'aaccc'

//time O(n), space O(n)
function palendromePermutation(str) {
  if (str.length === 0) return -1
  let strHash = {}
  for (let letter of str) {
    if (letter < 10 || letter.toLowerCase() === letter.toUpperCase()) continue
    strHash[letter]
      ? strHash[letter.toLowerCase()]++
      : (strHash[letter.toLowerCase()] = 1)
  }
  endingValues = Object.values(strHash)
  let numOdd = 0
  for (let item of endingValues) {
    if (item % 2 !== 0) numOdd++
    if (numOdd > 1) return false
  }
  return true
}

console.group('palendromePermutation quick tests')
console.log(palendromePermutation(yesP)) //true
console.log(palendromePermutation(yesP2)) //true
console.log(palendromePermutation(emptyStr)) //-1
console.log(palendromePermutation(noP)) // false
console.log(palendromePermutation(space)) //true
console.log(palendromePermutation(ignoreNonLet)) //true
console.log(palendromePermutation(tooManyRepeats)) //false
console.log(palendromePermutation(tooManyRepeatsTrue)) //true
console.groupEnd()
