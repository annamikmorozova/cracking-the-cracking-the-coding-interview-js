//Implement am algorithm to determine if a string has all unique characters
//Assume a string has only English letters (ASCII) = 128

// if allowed using a data structure
// Time complexity Big O(N)
// Space complexity Big O(1)
function withArray(str) {
    const array = []
    for (let i = 0; i < 128; i++) {
        array.push(false);
    }
    /*
    Alternatively, you can write lines 8~11 as such:
    const array = new Array(128).fill(false)
    */
    for (let i = 0; i < str.length; i++) {
        if (array[str.charCodeAt(i)]) {
            return false;
        }
        array[str.charCodeAt(i)] = true;
    }
}

console.log(withArray("hello")); //false
console.log(withArray("helo")); // true
