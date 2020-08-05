// is str1 a substring of another str2
// substring - a rotation of another word

// Time complexity Big O(N);
// Space complexity Big O(N) because it creates a new string (str2 + str2)
function isRotation(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    if ((str2 + str2).includes(str1)) {
        return true;
    }
    return false;
}

console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("iloveyou", "loveiyou")); //false