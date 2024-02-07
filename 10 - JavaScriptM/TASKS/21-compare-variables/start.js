/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = "5";

// Напишите код здесь

const a = (mV1, mV2) => {
    const nV1 = Number(mV1);
    const nV2 = Number(mV2);
    return console.log(nV1 >= nV2);
  };

a(myVariable1, myVariable2);
