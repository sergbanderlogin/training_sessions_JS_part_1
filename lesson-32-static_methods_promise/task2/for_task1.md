Цепочка промисов

**Условие**

Напишите функцию, которая асинхронно будет выполнять математические операции с переданным числом

**Задание:**

    - Файл должен экспортировать функцию под именем `asyncCalculator`
    - Сигнатура: `asyncCalculator(numbr)`, где единственный аргумент - число
    - `asyncCalculator` должна вернуть Promise
    - `asyncCalculator` должна вывести в консоль полученное значение через 500ms в формате **'Initial value: 5'**, где 5 - аргумент ф-ции
    - `asyncCalculator` должна вывести в консоль квадрат числа через 500ms после первого вывода в формате **'Squared value: 25'**, если 5 - аргумент ф-ции `asyncCalculator`
    - `asyncCalculator` должна вывести в консоль удвоенный квадрат числа сразу после второго вывода в формате **'Doubled value: 50'**, если 5 - аргумент ф-ции `asyncCalculator`
    - Подписчики `asyncCalculator` должны получить пезультат, когда `asyncCalculator` закончит работу
    - Все действия ф-ция должна выполнять в отдельных `.then` обработчиках

Полезные статьи:

    - https://learn.javascript.ru/promise-chaining (Promise chain)
