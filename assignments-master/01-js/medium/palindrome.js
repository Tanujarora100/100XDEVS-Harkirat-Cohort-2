function isSpecialCharacter(char) {
    return !/^[a-zA-Z0-9]$/.test(char);
}

function isPalindrome(str) {
    str = str.trim().toLowerCase();
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        while (isSpecialCharacter(str[start]) && start < end) {
            start++;
        }
        while (isSpecialCharacter(str[end]) && end > start) {
            end--;
        }

        if (str[start] !== str[end])
            return false;
        else {
            start++;
            end--;
        }
    }

    return true;
}

module.exports = isPalindrome;
