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

// Задача 11
let n = 10;
nextNumber:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextNumber;
  }
  console.log(i);
}
