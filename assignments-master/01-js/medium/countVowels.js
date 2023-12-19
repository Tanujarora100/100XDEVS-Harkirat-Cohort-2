/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let ans = 0;
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < str.length; i++) {
        if (vowelSet.has(str[i].toLowerCase()))
            ++ans;
    }
    return ans;
}

module.exports = countVowels;

testString = "aeeou";
let number = countVowels(testString);
console.log(number)