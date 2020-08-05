//Implement am algorithm to determine if a string has all unique characters

// sorting the string improves time complexity at the cost of space complexity
// time complexity Big O(N*log(N))
// space complexity Big O(N)
function isUniqueSorted(str) {
  str = str.split("").sort().join("")
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
        return false;
    }
  }
  return true;
}

console.log(isUniqueSorted("abcde")) //true
console.log(isUniqueSorted("abba")) //false
console.log(isUniqueSorted("aba")) //false
