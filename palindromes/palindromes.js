const palindromes = function(word) {
    let processedWord = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    return processedWord == processedWord.split("").reverse().join("")
}

module.exports = palindromes
