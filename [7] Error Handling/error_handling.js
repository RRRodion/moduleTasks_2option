/* Напишите функцию, которая использует блок
try-catch для перехвата и обработки ошибки
TypeError при доступе к свойству
неопределенного объекта. */

function accessProperty(obj) {
    try {
        console.log(obj.undefinedProperty);
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Property access error:", error.message);
        } else {
            throw error;
        }
    }
}

const testObject = {};
accessProperty(testObject); //"Property access error: Cannot read property 'undefinedProperty' of undefined"
