// // Примитивные типы данных;

// //Number
// //console.log(1/0);
// console.log(typeof NaN); //Nan = Not a Number

// //String

// const myString = "строка";

// const anotherString = "строка";

// const templateString = `шаблонная строка ${anotherString}`;

// console.log(templateString);

// //Boolean

// const isAdmin = true;
// const isUser = false;

// //Null

// // const emptyVariable = null;

// //undefined

// //const userName;
// //console.log(userName);

// Непримитивные типы данных
// Object

// const someName = "Petya";

// const user = {
//   name: someName,
//   lastName: "Ivanov",
//   age: 23,
//   citizenship: "Russia",
// };

// const userName=user.name

// console.log(userName);

// // Оператор typeof
// // typeof null - всегда объект! Признанная ошибка JS

// console.log(typeof null)

//Преобразование типов данных
//Строковое преобразование

// const myVar=123;

// const myVarToString = String(myVar);
// console.log(typeof myVarToString)

// Численное преобразование

// const myVar = '123';

// const myVarToNumber = +myVar;

// console.log(typeof myVarToNumber);

// Логическое преобразование

// const myVar = 1;

// console.log(!!myVar);
// Математические операторы

// const myNumber = 1;
// const newNumber =2;
// const myString ='строка';

// console.log(myNumber+myString);

// Сравнение строк
// const string1 = "строка";
// const string2 = 'солнце';
// console.log(string1==string2);

// const userTypes ={
// admin: "admin",
// user: "user",
// teacher: "teacher",
// contentManager: "contentManager",
// }

// const serverDataUserType = 'user';

// if(serverDataUserType===userTypes.admin){
// console.log('показать весь контент');
// }else{
//   console.log('показать ограниченный контент');
// }

// const myNumber = 1;
// const myString = "1";
// console.log(myNumber == myString);

// console.log(null == "\n0\n")

// console.log(typeof "111\n0\n333")

console.log(""-1+0);