function isPalindrome(string, i = 0) {
    const j = string.length - 1 - i;
    return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}