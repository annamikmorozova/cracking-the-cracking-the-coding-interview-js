//Given two strings. Return true if they are permutations of one another
//permutation is when strings have the same letters

// Time complexity Big O(N)
// For Space complexity the hash map will get as big as 
// the number of unique characters in the strings which
// could be be O(N) in the worst case, however, if the 
// possible character is restricted like only lowercase
// english letters (26) then map can only get as large as
// 26 so it is O(1)
function isPerm(str1, str2) {
    if (str1.length != str2.length) {
      return false;
    }
    let mapOne = makeMap(str1);
    let mapTwo = makeMap(str2);
    return Object.keys(mapOne).every(key => mapOne[key] == mapTwo[key]);
  }
  
  function makeMap(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]]++;
      } else {
        obj[str[i]] = 1;
      }
    }
    return obj;
  }
  
  console.log(isPerm("ahha", "haha")) //true
  console.log(isPerm("ab", "abc")) //false
  console.log(isPerm("abs", "abs")) //true
  console.log(isPerm("abcd", "abc")) // false
  console.log(isPerm("hi how are you?", "hi how are you")) //false