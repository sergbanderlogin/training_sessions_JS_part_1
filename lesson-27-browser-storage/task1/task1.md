Получение всех данных localStorage

**Условие**

Напишите функцию, которая вернет в виде объекта содержимое localStorage

**Задание:**

    - Функция должна экспортироваться под именем `getLocalStorageData`
    - Данные должны вернуться в виде объекта
    - Должна быть поддержка объектов как значений, что храняться в localStorage
    - Если данные были записаны в localStorage как строка / число / bool / null , то и в результате они должны быть строкой / числом / bool / null
    - Предполагаем, что массивы и объекты записывались с использованием `JSON.stringify`
