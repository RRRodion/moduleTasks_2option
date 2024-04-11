/* Напишите функцию, которая принимает
массив с числами и находит сумму первой
половины элементов этого массива. */

function sumOfFirstHalf(arr) {
    const halfIndex = Math.ceil(arr.length / 2);
    return arr.slice(0, halfIndex).reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumOfFirstHalf(numbers)); //6
