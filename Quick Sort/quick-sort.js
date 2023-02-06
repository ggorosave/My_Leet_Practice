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
    const leftArray = [];
    const rightArray = [];

    if (array.length <= 1) {
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