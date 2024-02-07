/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */
let min, max;
const minMax = (arr) => {
  min = Math.min.apply(Math, arr);
  max = Math.max.apply(Math, arr);
};

/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
minMax([24, 5, 34, 10]);
console.log(min, max); // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
minMax([18, 23, 103, 70, 80, 25]);
console.log(min, max); // 18, 103
