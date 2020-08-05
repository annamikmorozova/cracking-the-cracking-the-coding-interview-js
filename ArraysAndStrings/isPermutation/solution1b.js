//function to check given two strings, they are permutations of each other

let yesP = ['str1', 'rts1']
let noP = ['str1', 'str2']
let definitelyNotP = ['d', 'thisisthestringthatneverends']
let wrongType1 = [['ef'], 'fe']
let wrongType2 = [{u: 's'}, 'su']
let emptyStr = ['', 'a']
let duplicateNo = ['aab', 'bba']
let dupplicateYes = ['aaab', 'abaa']

//time O(n), space O(length)
function checkPermutation(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return -1
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return -1
  if (str1.length != str2.length) return false
  let str1Hash = {}
  for (let letter of str1) {
    if (str1Hash[letter] === undefined) str1Hash[letter] = 1
    else str1Hash[letter] = str1Hash[letter] + 1
  }
  for (let letter of str2) {
    if (str1Hash[letter] === undefined) return false
    if (str1Hash[letter] === 1) delete str1Hash[letter]
    if (str1Hash[letter] > 1) str1Hash[letter] = str1Hash[letter] - 1
  }
  return true
}

console.group('checkPermutation quick tests')
console.log(checkPermutation(yesP[0], yesP[1])) //true
console.log(checkPermutation(noP[0], noP[1])) //false
console.log(checkPermutation(definitelyNotP[0], definitelyNotP[1])) //false
console.log(checkPermutation(wrongType1[0], wrongType1[1])) //-1
console.log(checkPermutation(wrongType2[0], wrongType2[1])) //-1
console.log(checkPermutation(emptyStr[0], emptyStr[1])) //-1
console.log(checkPermutation(dupplicateYes[0], dupplicateYes[1])) //true
console.log(checkPermutation(duplicateNo[0], duplicateNo[1])) //false
console.groupEnd()
