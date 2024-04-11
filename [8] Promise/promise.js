/* Напишите функцию, которая принимает
массив URL-адресов и параллельно
загружает содержимое каждого URL-адреса с
помощью Promises. */

function fetchUrls(urls) {
    const promises = urls.map(url => fetch(url));
    return Promise.all(promises);
}

const urls = ["https://example.com/api1", "https://example.com/api2"];
fetchUrls(urls)
    .then(responses => {
        responses.forEach(response => {
            if (response.ok) {
                response.json().then(data => {
                }).catch(error => {
                    console.error('Ошибка при парсинге JSON:', error);
                });
            } else {
                console.error('Ошибка HTTP:', response.status);
            }
        });
    })
    .catch(error => {
        console.error('Произошла ошибка при выполнении запросов:', error);
    });

