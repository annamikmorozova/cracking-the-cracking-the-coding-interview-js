// Check if a given string can be a permutation and a palindrome
// Palindrome is a string that is the same backwards "aca" or "abbc"
// Permutation is a rearrangement of letters
// a string can only include letters and its not case sensitive

// Time Complexity is Big O(N);
// For Space complexity the hash map will get as big as 
// the number of unique characters in the strings which
// could be be O(N) in the worst case, however, if the 
// possible character is restricted like only lowercase
// english letters (26) then map can only get as large as
// 26 so it is O(1)
function isPalinPerm(string) {
    let str = string.toLowerCase();
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            if (obj[str[i]]) {
                obj[str[i]]++;
            } else {
                obj[str[i]] = 1;
            }
        }
    }
    let flag = false;
    let arrayOfValues = Object.values(obj);
    for (let i = 0; i < arrayOfValues.length; i++) {
        if (arrayOfValues[i] % 2 != 0 && flag == false) {
            flag = true;
        } else if (arrayOfValues[i] % 2 != 0 && flag == true) {
            return false;
        }
    }
    return true;
}


console.log(isPalinPerm("I am not a palindrome")); // false
console.log(isPalinPerm("Race car")); // true
console.log(isPalinPerm("Anna")); // true
console.log(isPalinPerm("Cota toc")); // true