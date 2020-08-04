// implement a method to perform basic string compression 
// using the counts of repeated characters
// return the same string if the new string is the same size or larger than the original string

// Time complexity is Big O(N);
// Space complexity is Big O(N);
function compressedString(string) {
    let array = [];
    counter = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i + 1]) {
            counter++;
        } else {
            array.push(string[i], counter)
            counter = 1;
        }
    }
    return array.join("").length >= string.length ? string : array.join("");
}

console.log(compressedString("aaabbbcdd")); //a3b3c1d2
console.log(compressedString("abcd")); // abcd
console.log(compressedString("aabbccdd")) //aabbccdd