/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number = 0;

    charArray = Array.from(s);

    // loop through the array
    // check if index and idex + 1 .joined = one of the letter combos, then add to number
    for (let i = 0; i < charArray.length; i++) {

        if (i === charArray.length - 1) {
            console.log('The End')
            return;
        }

        let joinedChars = [charArray[i], charArray[i + 1]].join('');

        console.log(joinedChars);

    }

    

    

    return number;
};

// console.log(romanToInt(0));

romanToInt('MCMXCIV')