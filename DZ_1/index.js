console.log('Hello World!'); /*вывели строку'Hello World'*/ 

const age = 20; /*создали переменную типа "Числа"*/
console.log(age); /*вывели в консоль переменную */
console.log(typeof age); /*вывели переменную через оператор */
console.log(typeof(age)); /*вывели переменную через функцию */

const name = 'Kate'; /*создали переменную типа "Строки"*/
console.log(name); /*вывели в консоль переменную */
console.log(typeof name); /*вывели переменную через оператор */
console.log(typeof(name)); /*вывели переменную через функцию */

const bool = true; /*создали переменную типа 'Булевый'*/
console.log(bool); /*вывели в консоль переменную */
console.log(typeof bool); /*вывели переменную через оператор */
console.log(typeof(bool)); /*вывели переменную через функцию */

const empty = null; /*создали переменную типа "Значение null"*/
console.log(empty); /*вывели в консоль переменную */
console.log(typeof empty); /*вывели переменную через оператор */
console.log(typeof(empty)); /*вывели переменную через функцию */

const  number = indefined; /*создали переменную типа "indefined"*/
console.log(number); /*вывели в консоль переменную */
console.log(typeof number); /*вывели переменную через оператор */
console.log(typeof(number)); /*вывели переменную через функцию */

const obj = {}; /*создали переменную типа "object"*/
console.log(obj); /*вывели в консоль переменную */
console.log(typeof obj); /*вывели переменную через оператор */
console.log(typeof(obj)); /*вывели переменную через функцию */

const bigint = 12642982624687172178236427982n; /*создали переменную типа "bigint"*/
console.log(bigint); /*вывели в консоль переменную */
console.log(typeof bigint); /*вывели переменную через оператор */
console.log(typeof(bigint)); /*вывели переменную через функцию */

const id = Symbol("id"); /*создали переменную типа "символы"*/
console.log(id); /*вывели в консоль переменную */
console.log(typeof id); /*вывели переменную через оператор */
console.log(typeof(id)); /*вывели переменную через функцию */

let userNameLet = { 
    name: "Ekaterina", /*объявили переменную типа "Строки" через const*/
    age: "20", 
};
userNameLet.age = "21" /*изменили объявленную через const переменную*/
console.log(userNameLet); /*вывели в консоль измененную переменную*/

const userNameConst = 'Lera'; /*объявили переменную типа "Строки" через const*/
userName = 'Vika'; /*изменили объявленную через const переменную*/
console.log(userNameConst); /*вывели в консоль измененную переменную*/

var userNameVar = {
    name: "Maks",  /*объявили переменную типа "Строки" через const*/
    age: "16",
};
userNameVar.name = "Andrey" /*изменили объявленную через const переменную*/
console.log(userNameVar); /*вывели в консоль измененную переменную*/