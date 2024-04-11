/* Напишите функцию, которая принимает
массив и значение, и возвращает true, если
это значение присутствует в массиве, и false,
если нет. Используйте строгий режим. */

"use strict";

function isInArray(arr, value) {
    return arr.includes(value);
}

const arr = [1, 2, 3, 4, 5];
console.log(isInArray(arr, 3)); //true
console.log(isInArray(arr, 6)); //false
