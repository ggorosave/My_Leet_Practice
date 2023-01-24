// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// My version (doesn't work)
// var twoSum = function (nums, target) {

//     // An empty array to hold the indices of solution numbers
//     let indices = []

//     // Loops through each number in the array and checks the sum against the target sum
//     for (let i = 0; i < nums.length; i++) {

//         let current = nums[i]

//         // if the indices array holds two values, exit the function and return the array
//         if (indices.length === 2) {
//             return indices
//         }

//         nums.forEach((num) => {

//             // variables to hold the index of each number
//             let currentIdx = nums.indexOf(current);
//             let numIdx = nums.indexOf(num);

//             // ternary operator to get the index of the num if it's the same as the current number
//             // let idxFinder = (num) => current === num ? nums.indexOf(num) : nums.indexOf(num, currentIdx + 1);
//             // let numIdx = idxFinder(num);
            
            
//             // checks if indices aren't the same
//             if (currentIdx !== numIdx) {
                
//                 // checks if sum of values equals the target
//                 if (current + num === target) {

//                     // pushes indexes to indices array
//                     indices.push(currentIdx);
//                     indices.push(numIdx)
//                     return
//                 }
//             }
//         });

//     }

// };

// Trying to recreate from memory a version I found in the comments using Map
var twoSum = function (nums, target) {

    // An empty array to hold the indices of solution numbers
    let indices = []

    // Map creates a key/value pair, like an object, so it may work better.
    let numMap = new Map();

    // for loop to create the key value pairs from the nums array
    for (let i = 0; i < nums.length; i++) {

        numMap.set(i, nums[i]);
    }

    // for of loop to iterate through properties of numMap
    for (const [key, value] of numMap) {

        // sets index to zero with each iteration
        let index = 0;
        
        // while loop that checks the length of the indecies array and that the index is still less than the length of the number array
        while (indices.length < 2 && index < nums.length) {

            // runs code only if the key and index are not equal
            if (key !== index) {
                
                // checks if the current value plus the value of the array item with the current index equals the target
                if (value + nums[index] === target) {

                    // pushed the key and the index to the indecies array
                    indices.push(key);
                    indices.push(index);
                }
            }

            index += 1;
        }

    }

    return indices;
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));

console.log(twoSum([3, 3], 6));