const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

const bubbleSort = (array) => {

    // const sortedArray = []
    
    for (let i = 0; i < array.length; i++) {
        
        // while (array[i] > array[i + 1]) {
        //     if (array[i] > array[i + 1]) {
        //         let tmp = array[i];
        //         [array[i], array[i + 1]] = [array[i + 1], tmp]
        //     }
        // }

        for (const element of array) {
            if (element > array[i]) {
                // let tmp = array[i];
                [element, array[i]] = [array[i], element]
            }
        }
    }

    return array;
};

console.log(bubbleSort(testArray));