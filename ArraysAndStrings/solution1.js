// replace spaces to %20
// assume length is the actual number of the string
// after the string you get as many spaces as needed to replace with &20
// solve in place

// Time complexity Big O(N)
// Space complexity Big O(1)
function URLify(str, len) {
    i = str.length - 1;
    j = len - 1;
    let string = str.split("");
    while (j >= 0) {
      if (string[j] == " ") {
        string[i] = 0;
        string[i-1] = 2;
        string[i-2] = "%";
        i = i - 2;
      } else {
        string[i] = string[j];
      }
      i--;
      j--;
    }
    return string.join("");
  }
  
  console.log(URLify("Mr John Smith    ", 13)) //Mr%20John%20Smith