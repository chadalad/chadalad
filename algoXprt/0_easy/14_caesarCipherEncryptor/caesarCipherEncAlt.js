function caesarCipherEncryptor(string, key) {
    const newLetters = [];
    const newKey = key % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (const letter of string) {
        newLetters.push(getNewLetter(letter, newKey, alphabet));
    }
    return newLetters.join('');
}

function getNewLetter(letter, key, alphabet) {
    const newLetterCode = alphabet.indexOf(letter) + key;
    return alphabet[newLetterCode % 26];
}