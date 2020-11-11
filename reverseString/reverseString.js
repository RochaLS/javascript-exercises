const reverseString = function(string) {
    let arr = string.split('')
    arr.reverse()
    return arr.join('')
}

module.exports = reverseString
