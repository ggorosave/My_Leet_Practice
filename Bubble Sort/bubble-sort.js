const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

const bubbleSort = (array) => {

    for (let i = 0; i < array.length; i++) {

        while (array[i] > array[i + 1]) {
            if (array[i] > array[i + 1]) {
                let tmp = array[i];
                [array[i], array[i + 1]] = [array[i + 1], tmp]
            }
        }
    }

};

console.log(bubbleSort(testArray));