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
    // DELETE
    // console.log('pivot: ' + pivot);

    // ---DELETE BELOW---

    // const sortPartition = (array, left, right) {
    //     const pivot = array[right];
    //     let i = left - 1;

    //     for(let j = left; j < right - 1; j++) {

    //         if (array[j] > pivot) {
    //             i++
    //             [array[j], array[i]] = [array[i], array[j]];
    //         }
    //     }

    //     [array[i + 1], pivot] = [pivot, array[i + 1]];
    //     return i + 1;
    // }

    // // sorts the left
    // for (let j = 0; j < pIndex - 1; j++) {
    //     let i = j - 1;
    //     if (array[j] < array[pIndex]) {
    //         [array[j], array[i]] = [array[i], array[j]];
    //     }
    // }

    // ---Attempt 02/06/2023---
    let left = 0;
    let right = array.length;
    let pivot = array[right];
    
    // creates two sub arrays
    const lessThanArray = array.map(num => num < pivot);
    const greaterThanArray = array.map(num => num > pivot);

    // recursively calls quicksort on lessThan and greaterThan arrays
    const lessThanSortedArray = quickSort(lessThanArray);
    const greaterThanSortedArray = quickSort(greaterThanArray);

    return array = [...lessThanSortedArray, pivot, ...greaterThanSortedArray];
    

    // loops through each element of the array
    for (let j = 0; j < array.length; j++) {

        if (array[j] > pivot) {
            i++
            [array[j], array[i]] = [array[i], array[j]];
        }

        [array[i + 1], pivot] = [pivot, array[i + 1]];

        if (j === array.length) {

        }
    }
    
    // ---NEW---
    /*
    1. Choose pivot
    2. make two sub arrays, numbers greater than pivot go in one array, and numbers greater than pivot go in another array
    3. recursively call quicksort
    */
    let left = 0;
    let right = array.length;
    let pivot = array[right];
    
    // creates two sub arrays
    const lessThanArray = array.map(num => num < pivot);
    const greaterThanArray = array.map(num => num > pivot);

    // recursively calls quicksort on lessThan and greaterThan arrays
    const lessThanSortedArray = quickSort(lessThanArray);
    const greaterThanSortedArray = quickSort(greaterThanArray);

    return array = [...lessThanSortedArray, pivot, ...greaterThanSortedArray];


    return array;
}

quickSort(testArray);