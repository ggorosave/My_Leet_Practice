const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function quickSort(array) {
    // 1. choose a pivot (median of three - randomly choose three elements and select the median of those elements)
    // 2. anything greater than the pivot goes on the right
    // 3. anything less than the pivot goes on the left
    // 4. repeat 1-3 until we are left with a single element in each list
    // 5. then put back together; everything on the left goes infront of the pivot; eveything on the right goes behind the pivot

    const medianOfThree = (array) => {
        // Randomly select three indexes in the array
        const first = Math.floor(Math.random() * array.length);
        const second = Math.floor(Math.random() * array.length);
        const third = Math.floor(Math.random() * array.length);

        // Checks which of the elements with the selected indices from above is the median then returns the value
        if (
            (array[first] > array[second] && array[first] < array[third]) ||
            (array[first] > array[third] && array[first] < array[second])
        ) {
            return array[first];
        } else if (
            (array[second] > array[first] && array[second] < array[third]) ||
            (array[second] > array[third] && array[second] < array[first])
        ) {
            return array[second];
        } else if (
            (array[third] > array[first] && array[third] < array[second]) ||
            (array[third] > array[second] && array[third] < array[first])
            ) {
            return array[third];
        } else {
            return console.log('Oops! There was a problem! Check for duplicates in the array.')
        }

    }

    // Calls medianOfThree to return the pivot
    const pivot = medianOfThree(array);

    // DELETE
    console.log('pivot: ' + pivot);

    return array;
}

quickSort(testArray);