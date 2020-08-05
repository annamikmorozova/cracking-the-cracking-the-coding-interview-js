//Implement am algorithm to determine if a string has all unique characters

// if not allowed using a data structure
// time complexity Big O(N^2)
// space complexity Big O(1)
function uniqueChar(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(uniqueChar("abcde")) //true
console.log(uniqueChar("abba")) //false
console.log(uniqueChar("aba")) //false
