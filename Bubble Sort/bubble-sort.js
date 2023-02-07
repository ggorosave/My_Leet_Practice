/** Bubble Sort
 * Source:  https://www.youtube.com/watch?v=IAeLoGzU4RE
 * */ 
const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

const bubbleSort = (array) => {
    
    // iterates for the length of the array minus one because the largest number should bubble to the end in the first iteration
    for (let i = 0; i < array.length - 1; i++) {

        // iterates through the array to check whether the current element is greater than the next
        // it subracts 1 and i from each iteration beacuse the largest numbers should 'bubble' to the end with each consecutive iteration
        for (let j = 0; j < array.length - 1 - i; j++) {

            // swaps the values in the array if the value of the current element is greater than the next element
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
        
    }

    return array;
};

console.log(bubbleSort(testArray));