Event Loop

**Условие**

Исправьте порядок чисел, выведенных в консоль

**Задание:**

    - Файл должен экспортировать функцию под именем `printing`
    - Начальный код ф-ции `printing`: 
        ```
            export const printing = () => {
                console.log(1);
                setTimeout(function() { console.log(2); }, 1000);
                console.log(3);
                setTimeout(function() { console.log(4); }, 0);
                console.log(5);
            };
        ```
    
    - Меняйте только аргументы метода `console.log`, чтобы числа вывелись в консоль в правильном порядке. Остальной код должен остаться неизменным

Полезные статьи:

    - https://www.youtube.com/watch?v=8aGhZQkoFbQ
    - http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbWFpbigpIHsKICAgIGNvbnNvbGUubG9nKCcxJyk7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVyMSgpIHsKICAgICAgICBjb25zb2xlLmxvZygnMicpOwogICAgfSwgMCk7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVyMigpIHsKICAgICAgICBjb25zb2xlLmxvZygnNCcpOwogICAgfSwgMTAwMCk7CiAgICBjb25zb2xlLmxvZygnNScpOwp9CgptYWluKCk7Cg%3D%3D!!!ICAgIDxkaXYgY2xhc3M9InBhZ2UiPgogICAgICAgIDxzcGFuIGNsYXNzPSJpbWFnZS1zaXplIj48L3NwYW4%2BCiAgICA8L2Rpdj4%3D