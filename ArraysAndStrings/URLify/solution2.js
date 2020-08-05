//URLify string with whitespace to string with %20 and expect whitespace at end or near to be trimmed
let noTrim = 'the face of my face'
let frontTrim = ' the time of my life'
let backTrim = 'the miles that I walked '
let bothTrim = '   are all I can think of  '
let emptyString = ''
let wrongType = [[[['im trapped in here']]]]

//time O(n), space O(1)
function URLify(str) {
  if (str === '') return -1
  if (typeof str !== 'string') return -1
  let spaceRegex = /\s/gi
  return str.trim().replace(spaceRegex, '%20')
}

console.group('URLify quick tests')
console.log(URLify(noTrim))
console.log(URLify(frontTrim))
console.log(URLify(backTrim))
console.log(URLify(bothTrim))
console.log(URLify(emptyString)) //-1
console.log(URLify(wrongType)) //-1
console.groupEnd()
