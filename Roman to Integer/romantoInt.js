/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let number = 0;

    charArray = Array.from(s);

    // loop through the array
    // check if index and idex + 1 .joined = one of the letter combos, then add to number

    // Runs the code in the do section once, then checks the condition again
    do {
        // joins the first two characters of the array in a new variable
        let joinedChars = [charArray[0], charArray[1]].join('');

        // checks if joined characters match certain roman numeral combinations
        if (/IV/i.test(joinedChars) ||
            /IX/i.test(joinedChars) ||
            /XL/i.test(joinedChars) ||
            /XC/i.test(joinedChars) ||
            /CD/i.test(joinedChars) ||
            /CM/i.test(joinedChars)) {

            // switch case that adds a certain amount to the number depending on the combination of letters
            switch (joinedChars) {
                case 'IV':
                    number += 4;
                    break;
                case 'IX':
                    number += 9;
                    break;
                case 'XL':
                    number += 40;
                    break;
                case 'XC':
                    number += 90;
                    break;
                case 'CD':
                    number += 400;
                    break;
                case 'CM':
                    number += 900;
                    break;
                default:
                    number += 0;
            }

            // removes the first two items of the array
            charArray.shift();
            charArray.shift();

            // Else statement runs if the joined characters don't match roman numeral combinations
        } else {

            switch (charArray[0]) {
                case 'I':
                    number += 1;
                    break;
                case 'V':
                    number += 5;
                    break;
                case 'X':
                    number += 10;
                    break;
                case 'L':
                    number += 50;
                    break;
                case 'C':
                    number += 100;
                    break;
                case 'D':
                    number += 500;
                    break;
                case 'M':
                    number += 1000;
                    break;
                default:
                    number += 0;
            }

            charArray.shift();
        }

    } while (charArray.length > 0)

    return number;
};


// romanToInt('MCMXCIV')
console.log(romanToInt('MCMXCIV'));