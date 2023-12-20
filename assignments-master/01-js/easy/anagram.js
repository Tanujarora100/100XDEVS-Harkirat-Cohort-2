/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if (str1.length !== str2.length)
        return false;

    let hashMap = new Map();
    for (let i = 0; i < str1.length; i++) {
        hashMap.set(str1[i].toLowerCase(), (hashMap.get(str1[i].toLowerCase()) || 0) + 1);
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i].toLowerCase();
        if (!hashMap.has(char) || hashMap.get(char) === 0) {
            return false;
        }
        // Decrement the frequency in the map
        hashMap.set(char, hashMap.get(char) - 1);
    }
    return true;

}


module.exports = isAnagram;
const ans = isAnagram("hi", `ih`)
console.log(ans)


