/**
*NOT MY CODE
*SOURCE: https://www.youtube.com/watch?v=Pp6hblquNy8
**/

const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function quickSort(array, left, right) {

    // sets left equal to the value of the argument or 0;
    left = left || 0;

    // sets right equal to the value of the argument or the index of the last element in the array 
    right = right || array.length - 1;

    // sorts a part of the array and returns the index of the last element sorted as the new pivot
    const pivot = sortPartition(array, left, right);

    // if the left index is still less than the pivot minus one, then run the quicksort again using one less that the pivot as the value of the right
    // helps garauntee that the left side of the array is sorted
    if (left < pivot - 1) {
        quickSort(array, left, pivot - 1)
    }

    // if the right index is still greater than the pivot minus one, then recursively run the quicksort again on the array with the left set to the value of the pivot minus one
    // helps garauntee that the right side of the array is sorted
    if (right > pivot - 1) {
        quickSort(array, pivot, right)
    }

    return array
}

// Hoare partition
function sortPartition(array, left, right) {
    // adds the left to the right and divides by two, rounding down, to grab the index of the value in the middle of the array
    const pivot = Math.floor((left + right) / 2);

    // while loops run anything within the brakets once while the condition is true
    // runs while the index of the left is less that the index of the right most element in the array
    while (left <= right) {

        // while the value of the left most element is less than the value of the pivot, add one too the left
        // so the if statement below will run ONLY if the value of the left index is not less than the value of the right index 
        while (array[left] < array[pivot]) {
            left++
        }

        // while the value of the right most element is greater than the value of the pivot, add one to the right
        // the if statement below will ONLY run if the value of the element at the right index is not greater than the value of the pivot
        while (array[right] > array[pivot]) {
            right--
        }

        // checks if the index of the left is still less than or equal to the right
        if (left <= right) {
            
            // switches postions of the values of the elements at the left and right index 
            [array[left], array[right]] = [array[right], array[left]]

            // adds one to the left index and subtracts one from the right index
            left++
            right--
        }

    }

    // returns the index of the left because everything before the value of the left index should be sorted
    return left;
}

console.log(quickSort(testArray));