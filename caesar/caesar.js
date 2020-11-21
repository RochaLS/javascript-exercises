const caesar = function(word, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let wordArray = word.split('');

    let cryptoArray = wordArray.map((item) => {
        if ((/[a-zA-Z]/).test(item) && item != ' ') {
             let index = alphabet.indexOf(item.toLowerCase());
             index += shift

             while (index > alphabet.length - 1) {
                 index -= alphabet.length
             }
              //Make sure we wrap again at the beggining of the array if the index is bigger than the array itself

             index = index < 0 ? alphabet.length - ((Math.abs(index) + alphabet.length) - alphabet.length) : index // if index is negative calculate where in the array the item will be.

            if (item == item.toUpperCase())
                item = alphabet[index].toUpperCase();
            else {
                item = alphabet[index].toLowerCase();
            }

        return item;
        
        }

        return item;
    });

    return cryptoArray.join('');


};


module.exports = caesar
