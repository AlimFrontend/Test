/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
  const a = 1;
  return a + b;
}

const secondFunction = function (a, b) {
  a = 2;
  return a + b;
};

// vars announced in "firstFunction" aren't useable in "secondFunction"
