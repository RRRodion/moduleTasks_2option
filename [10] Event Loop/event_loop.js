/* Напишите функцию, которая извлекает
данные из API и отменяет запрос, если он
занимает больше указанного времени. */

function fetchDataWithTimeout(url, timeout) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error("Request timed out"));
        }, timeout);

        fetch(url)
            .then(response => {
                clearTimeout(timeoutId);
                resolve(response);
            })
            .catch(error => {
                clearTimeout(timeoutId);
                reject(error);
            });
    });
}

const apiUrl = "https://example.com/api";
const requestTimeout = 5000; // 5 секунд

fetchDataWithTimeout(apiUrl, requestTimeout)
    .then(response => {
        // Обработка успешного ответа
    })
    .catch(error => {
        // Обработка ошибок или запроса, превысившего время
    });
