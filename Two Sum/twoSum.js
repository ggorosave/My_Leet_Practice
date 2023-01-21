// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let indeces = []

    for (let i =0; i < nums.length; i++) {
        let current = nums[i]

        nums.forEach((num) => {
            if (current + num === target) {

                indeces.push(nums.indexOf(current));
                indeces.push(nums.indexOf(num))
                return indeces;
            }

            // console.log(current + num);
        });
    }
    
};

console.log(twoSum([2,7,11,15], 9));