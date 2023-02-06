const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function quickSort(array) {
    // 1. choose a pivot (median of three - randomly choose three elements and select the median of those elements)
    // 2. anything greater than the pivot goes on the right
    // 3. anything less than the pivot goes on the left
    // 4. repeat 1-3 until we are left with a single element in each list
    // 5. then put back together; everything on the left goes infront of the pivot; eveything on the right goes behind the pivot

    // const medianOfThree = (array) => {
    //     // Randomly select three indexes in the array
    //     const first = Math.floor(Math.random() * array.length);
    //     const second = Math.floor(Math.random() * array.length);
    //     const third = Math.floor(Math.random() * array.length);

    //     // Checks which of the elements with the selected indices from above is the median then returns the index
    //     if (
    //         (array[first] > array[second] && array[first] < array[third]) ||
    //         (array[first] > array[third] && array[first] < array[second])
    //     ) {
    //         return first;
    //     } else if (
    //         (array[second] > array[first] && array[second] < array[third]) ||
    //         (array[second] > array[third] && array[second] < array[first])
    //     ) {
    //         return second;
    //     } else if (
    //         (array[third] > array[first] && array[third] < array[second]) ||
    //         (array[third] > array[second] && array[third] < array[first])
    //         ) {
    //         return third;
    //     } else {
    //         return console.log('Oops! There was a problem! Check for duplicates in the array.')
    //     }

    // }

    // Calls medianOfThree to return the pivot
    // const pIndex = medianOfThree(array);
     
    // ---NEW---
    /*
    1. Choose pivot
    2. make two sub arrays, numbers greater than pivot go in one array, and numbers greater than pivot go in another array
    3. recursively call quicksort
    */
    // sets the pivot to the right most element in the array

    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    if (array.length === 1) {
        return array;
    }
    
    // creates two sub arrays

    for (const item of array.slice(0, array.length - 1)) {
        item < pivot ? leftArray.push(item) : rightArray.push(item);
    }

    // const leftArray = array.map(number => number < pivot);
    // const rightArray = array.map(number => number > pivot);

    // for (let i = 0; i < array.length - 1; i++) {
    //     if (array[i] < pivot) {
    //         leftArray.push(array[i]);
    //     } else {
    //         rightArray.push(array[i]);
    //     }
    // }

    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];

    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot];
    } else {
        return [pivot, ...quickSort(rightArray)];
    }
   
}
// quickSort(testArray);

console.log(quickSort(testArray));