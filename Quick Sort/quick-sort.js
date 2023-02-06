/**
*NOT MY CODE
*SOURCE: https://www.youtube.com/watch?v=P6XGSKO2RzI
**/

const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function quickSort(array) {
    // ---NEW---
    /*
    1. Choose pivot
    2. make two sub arrays, numbers greater than pivot go in one array, and numbers greater than pivot go in another array
    3. recursively call quicksort
    */

    // sets the pivot to the right most element in the array
    const pivot = array[array.length - 1];

    // empty array to push elements less than the pivot into
    const leftArray = [];
    // empty array to push elements greater than the pivot into
    const rightArray = [];

    // edge case, if array contains zero or one element, then return the array
    if (array.length <= 1) {
        return array;
    }
    
    // for/of loop checks whether each element in the array is greater than or less than the pivot and pushes it into the appropriate array
    // array.slice(0, array.length -1) removes the pivot from the array so it's not included in the left or right array
    for (const element of array.slice(0, array.length - 1)) {
        element < pivot ? leftArray.push(element) : rightArray.push(element);
    }

    // Checks whether both left and right arrays have elements then returns an array with a recursive quicksort of the left and right array spread out and the pivot in the middle
    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];

           // if only the left array has elements, return an array with a recursive quicksort of the left spread out and the pivot
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot];
        
        // else retur an array with the pivot and a recursive  quicksort of the right array spread out 
    } else {
        return [pivot, ...quickSort(rightArray)];
    }
   
}
// quickSort(testArray);

console.log(quickSort(testArray));