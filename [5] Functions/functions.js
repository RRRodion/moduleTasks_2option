/* Напишите функцию для применения
алгоритма сортировки пузырьком. */

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const unsortedArray = [3, 1, 5, 2, 4];
console.log(bubbleSort(unsortedArray)); //[1, 2, 3, 4, 5]
