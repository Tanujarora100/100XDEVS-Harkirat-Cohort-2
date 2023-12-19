/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const arr = new Array(26).fill(0);
    const arr2 = new Array(26).fill(0);
    for (let i = 0; i < str1.length; i++) {
        const charCode = str1.charCodeAt(i) - 'a'.charCodeAt(0);
        arr[charCode]++;
    }

    for (let i = 0; i < str2.length; i++) {
        const charCode = str2.charCodeAt(i) - 'a'.charCodeAt(0);
        arr2[charCode]++;
    }
    return JSON.stringify(arr) === JSON.stringify(arr2)
}


module.exports = isAnagram;
const ans= isAnagram("hi", `ih`)
console.log(ans)


