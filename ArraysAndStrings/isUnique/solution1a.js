//Implement am algorithm to determine if a string has all unique characters

// if allowed using a data structure
// Time complexity Big O(N) 
// For Space complexity the set will get as big as 
// the number of unique characters in the strings which
// could be be O(N) in the worst case, however, if the 
// possible character is restricted like only lowercase
// english letters (26) then set can only get as large as
// 26 so it is O(1)
function isUnique(string) {
    let newSet = new Set();
    for (let i = 0; i < string.length; i++) {
        if (newSet.has(string[i])) {
            return false;
        } else {
            newSet.add(string[i]);
        }
    }
    return true;
}

console.log(isUnique("abcde")); //true
console.log(isUnique("abba")); //false
console.log(isUnique("aba")); //false