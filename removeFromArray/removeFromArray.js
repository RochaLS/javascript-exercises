const removeFromArray = function(array, ...itemsToRemove) {
    let tmpArray = array;
    for (let i = tmpArray.length - 1; i >= 0; i--) {
        for (let j = itemsToRemove.length; j >= 0; j--) {
            if (tmpArray[i] === itemsToRemove[j]) {
                tmpArray.splice(i, 1);
            }
        }  
    }

    return tmpArray;
}

// We need loop backwards because using splice will modify the indexes in array removing items from the last index is better because the position of the other's wont change, only the array length will change

module.exports = removeFromArray
