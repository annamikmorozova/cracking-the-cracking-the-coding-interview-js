//function to check if there is a a palendrome in any permutation of string

let yesP = 'qwertytrewq'
let yesP2 = 'aabb'
let emptyStr = ''
let noP = 'qre'
let space = 'tacca to'
let ignoreNonLet = 'ta#$(3784cotac'

//time O(n), space O(n)
function palendromePermutation(str) {
  if (str.length === 0) return -1
  let spaceRegex = /\s/g
  let nonAlphaRegex = /[^a-z]/gi
  str = str.replace(spaceRegex, '').replace(nonAlphaRegex, '').toLowerCase()
  let strSet = new Set(str)
  if (strSet.size !== Math.ceil(str.length / 2)) return false
  else return true
}

console.group('palendromePermutation quick tests')
console.log(palendromePermutation(yesP)) //true
console.log(palendromePermutation(yesP2)) //true
console.log(palendromePermutation(emptyStr)) //-1
console.log(palendromePermutation(noP)) // false
console.log(palendromePermutation(space)) //true
console.log(palendromePermutation(ignoreNonLet)) //true
console.groupEnd()
