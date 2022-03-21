// Задача 1

// const officialNameJs = prompt("Какое «официальное» название JavaScript?", "");
// if (officialNameJs == "ECMAScript") {
//   console.log("Верно!");
// } else {
//   console.log("Не знаете? - ECMAScript");
// }

// Задача 2
// const userValue = prompt("Введите число", "");
// if (userValue > 0) {
//   console.log("Значение больше нуля");
// } else if (userValue < 0) {
//   console.log("Значение меньше нуля");
// } else {
//   console.log("Значение равно нулю");
// }

// Задача 3
// let result;

// if (a + b < 4) {
//   result = "Мало";
// } else {
//   result = "Много";
// }

// let result = a + b < 4 ? "Мало" : "Много";

// Задача 4
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == "Сотрудник")? 'Привет':
// (login == "Директор")? 'Здравствуйте':
// (login == "")? 'Нет логина':
// "";

// Задача 5

// let age = 15;
// if (!(age >= 14 && age <= 90)) {
//   console.log("Указанный возраст находится в диапазоне");
// } else {
//   console.log("Указанный возраст не находится в диапазоне");
// }

// Задача 6
// let currentUser = prompt("Кто там?", "");
// let password = "Я Главный";
// if (currentUser === "admin") {
//   let message = prompt("Введите пароль");
//   if (message === password) {
//     console.log("Здравствувйте");
//   } else if (message === null) {
//     console.log("Отменено");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else if (currentUser === '' || currentUser === null) {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }

// Задача 7
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// const browser = "Safari";
// if (browser==="Edge;"){
//     console.log("You've got the Edge!");
// }else if (browser==="Chrome"||browser==="Firefox"||browser==="Safari"||browser==="Opera"){
//     console.log('Okay we support these browsers too');
// }else {
//     console.log('We hope that this page looks ok!');
// }

// Задача 7

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// let number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;

//   case 1:
//     alert("Вы ввели число 1");
//     break;

//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// let i=3;

// while (i) {
//     console.log(i--);
// }

// Задача 8

// for (let i=2; i<11; i+=2){
//     console.log(i);
// }

// Задача 9
// for (let i = 0; i < 3; i++) {
//    console.log( `${"number"} - ${i}!` );
//   }

// let i=0;
// while (i<3) {
//     console.log(i);
//     i++;
// }

// Задача 10
// let currentNumber;
// do {
//     currentNumber = prompt("Введите число больше 100", "")
// }
// while (currentNumber <100 && currentNumber){;
// }
// alert("Ok");

// // Задача 11
// let n = 10;
// nextNumber:
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextNumber;
//   }
//   console.log(i);
// }

// ДЗ с A-Generation
// 1
// const a = -3;
// if (a==0) {
//   console.log('Верно!');
// }else {
//  console.log ("Неверно");
// }
// 2
// const a=-3;
// if (a>0){
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
// 3
// let a=-1;
// if(a<0){
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
// 4
// let a=0;
// if (a>=0) {
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
// 5
// let a=1;
// if(a<=0){
//   console.log ('Верно');
// }else {
//   console.log ("Неверно");
// }
// 6
// let a=0;
// if (a!==0){
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
// 7
// const a = 3;
// if (a==="тест"){
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
// 8
// const a = 3;
// if (a==='1') {
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }

// Работа с логическими переменными
// 1
// const test = !!"";
// if (test == true){
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
//
// let a = !!" ";
// let check = (a == true)? console.log('Верно'):console.log('Неверно');

// 2
// const test = !!"";
// if (test !== true){
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
//
// let a = !!" ";
// let check = (a !== true)? console.log('Верно'):console.log('Неверно');

// Работа с && и ||
// 1
// const a = -3;
// if(a>0&&a<5){
//   console.log('Верно');
// }else {
//   console.log('Неверно');
// }
// 2
// let a = 3;
// if (a==0 || a==2) {
//   a+=7;
//   console.log(a);
// }else{
//   a/=10;
//   console.log(a);
// }
// 3
// let a = 3;
// let b = 5;
// let c;
// if (a <= 1 && b >= 3) {
//   c = a + b;
//   console.log(c);
// } else {
//   c = a - b;
//   console.log(c);
// }
// 4
// let a = 1;
// let b = 1;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// switch-case
// let num = 4;
// switch (num) {
//   case 1:
//   console.log("Зима");
//   break;
//   case 2:
//   console.log("Весна");
//   break;
//   case 3:
//   console.log("Лето");
//   break;
//   default:
//   console.log("Осень");
// }
// Общие задачи

// 1
// let day = 2;
// switch (true) {
//   case day >= 1 && day <= 10:
//     console.log("Первая декада");
//     break;
//   case day > 10 && day <= 20:
//     console.log("Вторая декада");
//     break;
//   default:
//     console.log("Третья декада");
//     break;
// }

// 2
// let month = 4;
// if(month>=1&&month<=3){
//   console.log("Зима");
// }else if(month>3&&month<=6) {
//   console.log("Весна");
// }else if(month>6&&month<=9){
//   console.log('Лето');
// }else {
//   console.log('Осень');
// }

// const month = 7;
// switch(true) {
//   case (month>=1&&month<=3):
//     console.log("Зима");
//     break;
//     case (month>3&&month<=6):
//       console.log("Весна");
//       break;
//       case (month>6&&month<=9):
//         console.log("Лето");
//         break;
//         default:
//         console.log("Осень");
//         break;
// }

// 3
// let newString = 'bbcde';
//   if (newString[0]==="a"){
//     console.log('Да');
//   }else {
//     console.log('Нет');
//   }

// 4
// const newString = "82345";
// if(newString[0]==='1'||newString[0]==='2'||newString[0]==='3'){
//   console.log('Да');
// }else{
//   console.log('Нет');
// }

// 5
// const newString = "333";
// let sum = 0;
// for (let i = 0; i <= newString.length - 1; i++) {
//   sum = sum + Number(newString[i]);
// }
// console.log(sum);

// 6
// const newString = '122321'
// if((Number(newString[0])+Number(newString[1])+Number(newString[2]))==(Number(newString[3])+Number(newString[4])+Number(newString[5]))) {
//   console.log('Да');
// } else {
//   console.log('Нет');
// } 

// Циклы for и while
// 1
// for (let i=1; i<=100; i++) {
//   console.log(i);
// }

// let i=1;
// while (i<=100) {
//   console.log(i)
//   i++;
// }

// 2
// for (let i=11; i<=33;i++) {
//   console.log(i);
// }

// let i=11;
// while(i<=33) {
//   console.log(i);
//   i++
// }

// 3
// for (let i=2; i<=100; i+=2) {
//   console.log(i);
// }

// let i =2;
// while (i<=100) {
//   if (i%2 ===0) {
//     console.log(i);
//   }
//   i++
// }

// 4
// let sum=0;
// for (i=1; i<=100; i++) {
//   sum = sum+i;
// }
// console.log(sum);

let sum=0;
i=1;
while(i<=100){
  sum=sum+i;
  i++
}
console.log(sum);