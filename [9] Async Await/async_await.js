/* Напишите функцию, которая сначала
загружает данные с одного сервера, а затем
использует эти данные для выполнения
запроса к другому серверу. Используйте
async/await для обеспечения
последовательного выполнения запросов. */

async function fetchDataFromServers() {
    try {
        const data1 = await fetch("https://server1");
        const json1 = await data1.json();

        const data2 = await fetch("https://server2", {
            method: "POST",
            body: JSON.stringify(json1)
        });
        const json2 = await data2.json();
    } catch (error) {
        //...
    }
}

fetchDataFromServers();
