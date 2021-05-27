Promise - first step

**Условие**

Напишите функцию, которая добавит картинку на страницу и вернет размеры этой картинки

**Задание:**

    - Файл должен экспортировать функцию под именем `addImage`
    - Сигнатура: `addImage('https://server.com/image.png')`, где единственный аргумент - адрес изображения
    - `addImage` должна добавить в элемент с классом `page` картинку с указанным адресом
    - Ф-ция `addImage` должна вернуть Promise, который зарезолвит размеры картинки (объект `{ width: 200, height: 100 }`, где 200 х 100 - размеры загруженной картинки) в случае успеха. Или зареджектит строку 'Image load failed', если произойдет ошибка при загрузке картинки

Полезные статьи:

    - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

Приклад роботи Promise можна подивитися за посиланням:
    - http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbWFpbigpIHsKICBjb25zb2xlLmxvZygnMScpOwogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIxKCkgewogICAgICBjb25zb2xlLmxvZygnMicpOwogIH0sIDApOwogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIyKCkgewogICAgICBjb25zb2xlLmxvZygnNCcpOwogIH0sIDEwMDApOwogIGNvbnNvbGUubG9nKCc1Jyk7Cn0KCm1haW4oKTsKY29uc29sZS5sb2coJzYnKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
