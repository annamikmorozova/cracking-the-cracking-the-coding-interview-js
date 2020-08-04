// 3 types of edits: replace, add, remove - return true

// Time complexity is Big O(N)
// Space complexity is Big O(1)

function oneWay(string, str) {
    if (Math.abs(string.length - str.length) > 1) {
        return false; // if more than 1 edit, return false right away
    }
    // get shorter and longer string
    let shorter = str.length < string.length ? str : string;
    let longer = str.length < string.length ? string : str;
    i = 0;
    j = 0;
    let flag = false;
    while (i < longer.length && j < shorter.length) {
        if (longer[i] == shorter[j]) {
            i++;
            j++;
        } else if (longer[i] != shorter[j] && longer.length != shorter.length) {
            if (flag == false) {
                flag = true;
                i++;
            } else {
                return false;
            }
        } else if (flag == false) {
            flag = true;
            i++;
            j++;
        } else {
            return false;
        }
    }
    return true;
}

console.log(oneWay("anna", "ann")); //true (remove)
console.log(oneWay("anna", "ana")); //true (remove)
console.log(oneWay("cats", "cits")); //true (replace)
console.log(oneWay("erik", "erika")); //true (add)
console.log(oneWay("cat", "catss")); // false
console.log(oneWay("apple", "a")); //false
console.log(oneWay("ap", "a")); //true
console.log(oneWay("apa", "alk")); //false
console.log(oneWay("abcdefg", "abdefg")); //true
console.log(oneWay("abccefg", "abdefg")); //false