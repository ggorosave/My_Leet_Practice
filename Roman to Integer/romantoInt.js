/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let number = 0;

    charArray = Array.from(s);

    // loop through the array
    // check if index and idex + 1 .joined = one of the letter combos, then add to number
   
    do {
        let joinedChars = [charArray[0], charArray[1]].join('');

        if (/IV/i.test(joinedChars) || /IX/i.test(joinedChars) || /XL/i.test(joinedChars) || /XC/i.test(joinedChars) || /CD/i.test(joinedChars) || /CM/i.test(joinedChars)) {
            console.log('Match: ' + joinedChars);
           
            charArray.shift();
            charArray.shift();
            
        } else {

            console.log('No match: ' + charArray[0]);

            charArray.shift();      

        }

    } while (charArray.length > 0)

    return number;
};

// console.log(romanToInt(0));

romanToInt('MCMXCIV')