const repeatString = function(word, numberOfTimes) {
    if (numberOfTimes < 0) {
        return 'ERROR';
    }
    let repeatedWord = '';
    for (let i = 1; i <= numberOfTimes; i++) {
        repeatedWord += word;
    }

    return repeatedWord
};

module.exports = repeatString
