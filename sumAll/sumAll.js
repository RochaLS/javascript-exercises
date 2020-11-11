const sumAll = function(num1, num2) {
    let tmp = 0;
    if ((num1 >= 0 && num2 >= 0) && (typeof num1 == 'number' && typeof num2 == 'number')) {
        if (num1 > num2) {
            let tmpValue = num1
            num1 = num2
            num2 = tmpValue
    }
        for (let i = num1; i <= num2; i++) {
            tmp += num1;
            num1++;
        }
        return tmp;
    }

    return 'ERROR'
    
}

module.exports = sumAll
