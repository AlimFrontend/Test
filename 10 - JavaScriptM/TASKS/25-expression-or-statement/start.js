/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15
// expression
const myObject = {x: 10, y: true}
// statement
myObject.z = 'abc'
// statement
delete myObject.x
// 
let newVariable
// expression
newVariable = 30 + 5
// statement
console.log(newVariable)
// expression
if (newVariable > 10) {console.log(`${newVariable} больше 10`)}
// expression statement
